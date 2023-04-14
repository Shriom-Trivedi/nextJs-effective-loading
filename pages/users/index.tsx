import { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const data = await fetch("https://dummyjson.com/users");
      setUsers(await data.json());
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default UserPage;
