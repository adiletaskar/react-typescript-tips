import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
    />
  );
};

export default UserPage;
