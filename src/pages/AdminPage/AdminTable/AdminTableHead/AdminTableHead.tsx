import "./styles/adminTableHead.css";

export const AdminTableHead = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Date</th>
        <th>Time</th>
        <th>Visitors</th>
        <th colSpan={3}>Manage</th>
      </tr>
    </thead>
  );
};
