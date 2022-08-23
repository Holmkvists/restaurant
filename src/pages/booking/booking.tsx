import "../../css/booking.css";
import { Header } from "../header/header";

export const Booking = () => {
  return (
    <div>
      <div className="hero__container">
        <div className="hero__filter">
          <Header />
          <div className="booking__square">
            <h1>Boka bord!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
