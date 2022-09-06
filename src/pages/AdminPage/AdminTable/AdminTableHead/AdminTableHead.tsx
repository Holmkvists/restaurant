import "./styles/adminTableHead.css";

export const AdminTableHead = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Date</th>
        <th>Time</th>
        <th>Tables</th>
        <th colSpan={2}>Manage</th>
      </tr>
    </thead>
  );
};
