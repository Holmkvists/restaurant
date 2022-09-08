import { useState } from "react";
import { AdminLogin } from "./AdminLogin/AdminLogin";
import { AdminTable } from "./AdminTable/AdminTable";
import { AdminToggle } from "./AdminToggle/AdminToggle";
import "./styles/adminPage.css";

export const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [active, setActive] = useState(true);
  return (
    <div className="admin__wrapper">
      {isAdmin && <AdminToggle active={active} setActive={setActive} />}
      {isAdmin ? (
        <AdminTable active={active} />
      ) : (
        <AdminLogin setIsAdmin={setIsAdmin} />
      )}
    </div>
  );
};
