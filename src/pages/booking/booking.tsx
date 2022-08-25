import { useState } from "react";
import { GenericButton } from "../../components/button/genericButton";
import "../../pages/booking/styles/booking.css";
import { Header } from "../header/header";

export const Booking = () => {
  const [bookings, setBookings] = useState({
    date: 0,
    time: 0,
    userId: "",
    visitors: 0,
    tables: 0,
    name: "",
    phone: 0,
    email: "",
  });

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("du klickade på nästa");
  };

  return (
    <div>
      <div className="hero__container">
        <div className="hero__filter">
          <Header />
          <div className="booking__container">
            <div className="booking__square">
              <h1 className="booking__heading">Boka bord!</h1>
              <form action="" className="booking__form">
                <div className="form__container">
                  <div className="booking__input">
                    <label htmlFor="">1. Välj datum</label>
                    <input type="date" name="" id="" />
                  </div>
                  <div className="booking__input">
                    <label htmlFor="">2. Välj en tid</label>
                    <div className="booking__radiolabel">
                      <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">18:00</label>
                      </div>
                      <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">21:00</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit__div">
                  <h4>Välj tid och datum för att se tillgänglighet</h4>
                  <GenericButton handleClick={handleClick} buttonText="Nästa" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
