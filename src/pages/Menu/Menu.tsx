import "./styles/menu.css";

import { Header } from "pages/header/header";

export const Menu = () => {
  return (
    <div className="menu__full">
      <Header />
      <div className="menu__container">
        <div className="menu__hero"></div>
      </div>
    </div>
  );
};
