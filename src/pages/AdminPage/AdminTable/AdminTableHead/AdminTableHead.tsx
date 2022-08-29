import "./styles/adminTableHead.css";

export const AdminTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Email</th>
        <th>ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>Tables</th>
        <th colSpan={2}>Manage</th>
      </tr>
    </thead>
  );
};
