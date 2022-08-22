import "../../css/header.css";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";

export const Layout = () => {
  return (
    <div className="image__container">
      <Header />
      <Outlet></Outlet>
    </div>
  );
};
