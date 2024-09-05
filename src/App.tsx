import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./redux/store";
import { fetchUsers, setSearchQuery } from "./redux/userSlice";
import ErrorMessage from "./ui/ErrorMessage";
import NoUsersMessage from "./ui/NoUsersMessage";
import SearchFields from "./components/SearchFields";
import UserTable from "./components/UserTable";
import normalizePhoneNumber from "./utils/normalizePhoneNumber";
import Layout from "./ui/Layout";
import Spinner from "./ui/Spinner";

const debounce = window._.debounce;

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error, searchQuery } = useSelector(
    (state: RootState) => state.users
  );

  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const debouncedDispatch = debounce(
    (column: keyof typeof searchQuery, value: string) => {
      dispatch(setSearchQuery({ column, query: value }));
    },
    300
  );

  const handleSearch = (column: keyof typeof searchQuery, value: string) => {
    setLocalSearchQuery({ ...localSearchQuery, [column]: value });
    debouncedDispatch(column, value);
  };

  const filteredUsers = users.filter((user) => {
    const normalizedPhone = normalizePhoneNumber(user.phone);
    const normalizedSearchPhone = normalizePhoneNumber(localSearchQuery.phone);

    return (
      user.name.toLowerCase().includes(localSearchQuery.name.toLowerCase()) &&
      user.username
        .toLowerCase()
        .includes(localSearchQuery.username.toLowerCase()) &&
      user.email.toLowerCase().includes(localSearchQuery.email.toLowerCase()) &&
      normalizedPhone.includes(normalizedSearchPhone)
    );
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <Layout>
      <SearchFields
        searchQuery={localSearchQuery}
        handleSearch={handleSearch}
      />
      {filteredUsers.length > 0 ? (
        <UserTable users={filteredUsers} />
      ) : (
        <NoUsersMessage />
      )}
    </Layout>
  );
}

export default App;
