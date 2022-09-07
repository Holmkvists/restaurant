import { Header } from "components/Header/Header";
import "./styles/menu.css";

export const MenuPage = () => {
  return (
    <div className="menu__full">
      <Header />
      <div className="menu__container">
        <div className="menu__hero"></div>
      </div>
    </div>
  );
};
