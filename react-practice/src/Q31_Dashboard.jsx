import React, { useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Riya", status: "active" },
    { id: 2, name: "Yash", status: "inactive" },
    { id: 3, name: "Aman", status: "active" }
  ]);

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
