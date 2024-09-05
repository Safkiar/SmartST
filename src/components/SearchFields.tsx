import Bar from "../ui/SearchBars";
import SearchCaption from "../ui/SearchCaption";
import SearchInput from "./SearchInput";
import { SearchFieldsProps } from "../types/types";

const SearchFields = ({ searchQuery, handleSearch }: SearchFieldsProps) => {
  return (
    <>
      <SearchCaption>
        <h2>Smart Searching Tool</h2>
      </SearchCaption>
      <Bar>
        <SearchInput
          placeholder="Search by name"
          value={searchQuery.name}
          onChange={(e) => handleSearch("name", e.target.value)}
        />
        <SearchInput
          placeholder="Search by username"
          value={searchQuery.username}
          onChange={(e) => handleSearch("username", e.target.value)}
        />
        <SearchInput
          placeholder="Search by email"
          value={searchQuery.email}
          onChange={(e) => handleSearch("email", e.target.value)}
        />
        <SearchInput
          placeholder="Search by phone"
          value={searchQuery.phone}
          onChange={(e) => handleSearch("phone", e.target.value)}
        />
      </Bar>
    </>
  );
};

export default SearchFields;
