//  IMPORTS

import { Header } from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import { Address } from "../../components/address/address";
import "./styles/cancelledPage.css";
import { useEffect } from "react";
import { cancelBooking } from "api/api";

export const CancelledPage = () => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      cancelBooking(id);
    }
  }, []);
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
