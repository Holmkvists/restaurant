import { Link } from "react-router-dom";
import "../../css/header.css";

export const Header = () => {
  return (
    <div className="header__div">
      <div className="mobile__headerline"></div>

      <ul className="header__ul">
        <span className="header__span__long"></span>
        <li className="header__li">
          <Link className="animation" to={"/"}>
            Hem
          </Link>
        </li>
        <span className="header__span__short"></span>
        <li className="header__li">
          <Link className="animation" to={"/book"}>
            Boka bord
          </Link>
        </li>
        <span className="header__span__short"></span>
        <li className="header__li">
          <Link className="animation" to={"/contact"}>
            Kontakt
          </Link>
        </li>
        <span className="header__span__long"></span>
      </ul>
      <div className="mobile__headerline"></div>
    </div>
  );
};
