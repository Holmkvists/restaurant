import { Link } from "react-router-dom";
import "../../css/header.css";

export const Header = () => {
  return (
    <div className="header__div">
      <div className="mobile__headerline"></div>

      <ul className="header__ul">
        <span className="header__span__long"></span>
        <li className="header__li">
          <Link to={"/home"}>Hem</Link>
        </li>
        <span className="header__span__short"></span>
        <li className="header__li">
          <Link to={"/book"}>Boka bord</Link>
        </li>
        <span className="header__span__short"></span>
        <li className="header__li">
          <Link to={"/contact"}>Kontakt</Link>
        </li>
        <span className="header__span__long"></span>
      </ul>
      <div className="mobile__headerline"></div>
    </div>
  );
};
