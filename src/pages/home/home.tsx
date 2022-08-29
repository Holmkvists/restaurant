import "./styles/home.css";
import { Link } from "react-router-dom";
import "../../components/address/styles/address.css";
import { Address } from "../../components/address/address";

export const Home = () => {
  return (
    <>
      <main className="home">
        <div className="logo-container">
          <div className="logo">
            <img src="/assets/logo/flamingo-logo.png" alt="Logo" />
          </div>
          <span>Flamingon</span>
        </div>
        <nav className="home-nav">
          <div className="lines"></div>
          <Link to={"/menu"}>Meny</Link>
          <div className="lg-screen-lines"></div>
          <Link to={"/book"}>Boka bord</Link>
          <div className="lg-screen-lines"></div>
          <Link to={"/contact"}>Kontakt</Link>
          <div className="lines"></div>
        </nav>
        <Address />
      </main>
    </>
  );
};
