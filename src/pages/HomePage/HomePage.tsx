import "./styles/homePage.css";
import { Link } from "react-router-dom";
import { Address } from "components/address/address";
import "../../components/address/styles/address.css";

export const HomePage = () => {
  return (
    <main className="home">
      <div className="logo__container">
        <div className="logo">
          <img src="/assets/logo/flamingo-logo.png" alt="Logo" />
        </div>
        <span>Flamingon</span>
      </div>
      <nav className="home__nav">
        <div className="lines"></div>
        <Link to={"/menu"}>Meny</Link>
        <div className="lg__screen__lines"></div>
        <Link to={"/book"}>Boka bord</Link>
        <div className="lg__screen__lines"></div>
        <Link to={"/contact"}>Kontakt</Link>
        <div className="lines"></div>
      </nav>
      <Address />
    </main>
  );
};
