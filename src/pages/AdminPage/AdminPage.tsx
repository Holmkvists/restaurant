import { useState } from "react";
import { AdminLogin } from "./AdminLogin/AdminLogin";
import { AdminTable } from "./AdminTable/AdminTable";
import "./styles/adminPage.css";

export const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="admin__wrapper">
      {isAdmin ? <AdminTable /> : <AdminLogin setIsAdmin={setIsAdmin} />}
    </div>
  );
};
