import { Link } from "react-router-dom";
import { Address } from "../../components/address/address";
import { Header } from "../header/header";

export const CancelledBooking = () => {
  return (
    <main className="cancellation">
      <Header />
      <div className="cancellation-message">
        <img src="/assets/sad-smiley.png" alt="sad-smiley" />
        <p>
          Din tid har avbokats. Boka en ny tid <Link to="/book">här!</Link>
        </p>
      </div>
      <Address />
    </main>
  );
};
