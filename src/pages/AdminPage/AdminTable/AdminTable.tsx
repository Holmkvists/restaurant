import { AdminTableBody } from "./AdminTableBody/AdminTableBody";
import { AdminTableHead } from "./AdminTableHead/AdminTableHead";
import "./styles/adminTable.css";

interface AdminTableProps {
  active: boolean;
}
export const AdminTable = (props: AdminTableProps) => {
  return (
    <table>
      <AdminTableHead />
      <AdminTableBody active={props.active} />
    </table>
  );
};
