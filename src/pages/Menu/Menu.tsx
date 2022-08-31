import "./styles/menu.css";

import { Link } from "react-router-dom";
import { Header } from "pages/header/header";

export const Menu = () => {
  return (
    <div className="menu-full">
      <Header />
      <div className="menu-container">
        <div className="menu-hero"></div>
      </div>
    </div>
  );
};
