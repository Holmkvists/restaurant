import { AdminTableBody } from "./AdminTableBody/AdminTableBody";
import { AdminTableHead } from "./AdminTableHead/AdminTableHead";
import "./styles/adminTable.css";

export const AdminTable = () => {
  return (
    <table>
      <AdminTableHead />
      <AdminTableBody />
    </table>
  );
};
