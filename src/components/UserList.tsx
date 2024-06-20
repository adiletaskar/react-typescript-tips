import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <UserItem user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UserList;
