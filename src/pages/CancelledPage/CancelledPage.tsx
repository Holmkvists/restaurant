//  IMPORTS

import { Header } from "../header/header";
import { Link } from "react-router-dom";
import { Address } from "../../components/address/address";
import "./styles/cancelledPage.css";

export const CancelledBooking = () => {
  return (
    <main className="cancellation">
      <Header />
      <div className="cancellation__message">
        <img src="/assets/sad-smiley.png" alt="sad-smiley" />
        <p>
          Din tid har avbokats. Boka en ny tid <Link to="/book">här!</Link>
        </p>
      </div>
      <Address />
    </main>
  );
};
