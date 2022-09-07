import { Link } from "react-router-dom";
import "./styles/header.css";

export const Header = () => {
  return (
    <div className="header__div">
      <div className="mobile__headerline"></div>

      <ul className="header__ul">
        <span className="header__span__long"></span>
        <li className="header__li">
          <Link className="animation" to={"/"} data-cy="homeButtonz">
            Hem
          </Link>
        </li>
        <span className="header__span__short"></span>
        <li className="header__li">
          <Link className="animation" to={"/boka-bord"} data-cy="bookingButton">
            Boka bord
          </Link>
        </li>
        <span className="header__span__short"></span>
        <li className="header__li">
          <Link className="animation" to={"/kontakt"} data-cy="contactButton">
            Kontakt
          </Link>
        </li>
        <span className="header__span__long"></span>
      </ul>
      <div className="mobile__headerline"></div>
    </div>
  );
};
