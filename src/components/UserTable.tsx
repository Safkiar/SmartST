import { User } from "../types/types";
import Table from "../ui/Table";
import Header from "../ui/TableHeader";
import Row from "../ui/TableRow";

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <Table>
      <thead>
        <Header>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </Header>
      </thead>
      <tbody>
        {users.map((user) => (
          <Row key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
