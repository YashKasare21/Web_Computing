function UserControls({ setUsers }) {
  return (
    <div>
      <button onClick={() => setUsers(prev => prev.map(u => ({ ...u, status: "active" })))}>
        Activate All
      </button>
      <button onClick={() => setUsers(prev => prev.map(u => ({ ...u, status: "inactive" })))}>
        Deactivate All
      </button>
    </div>
  );
}

export default UserControls;
