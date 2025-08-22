import React, { useState } from "react";
import UserList from "./UserList";
import UserControls from "./UserControls";

function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Riya", status: "active" },
    { id: 2, name: "Yash", status: "inactive" },
    { id: 3, name: "Aman", status: "active" }
  ]);

  return (
    <div>
      <h2>Dashboard</h2>
      <UserList users={users} />
      <UserControls setUsers={setUsers} />
    </div>
  );
}

export default Dashboard;
