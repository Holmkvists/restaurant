// IMPORTS

import { Link } from "react-router-dom";
import { Address } from "components/Address/Address";
import "./styles/homePage.css";

// COMPONENT

export const HomePage = () => {
  return (
    <>
      <main className="home">
        <div className="logo__container">
          <div className="logo">
            <img src="/assets/logo/flamingo-logo.png" alt="Logo" />
          </div>
          <span>Flamingon</span>
        </div>
        <nav className="home__nav">
          <div className="lines"></div>
          <Link to={"/meny"} data-cy="menuButton">
            Meny
          </Link>
          <div className="lg__screen__lines"></div>
          <Link to={"/boka-bord"} data-cy="bookingButton">
            Boka bord
          </Link>
          <div className="lg__screen__lines"></div>
          <Link to={"/kontakt"} data-cy="contactButton">
            Kontakt
          </Link>
          <div className="lines"></div>
        </nav>
      </main>
      <Address />
    </>
  );
};
