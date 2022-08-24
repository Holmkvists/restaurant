import { useEffect, useState } from "react";
import "../../css/booking.css";
import { IBooking } from "../../models/Ibooking";
import { Header } from "../header/header";

export const Booking = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  const url = "http://www.omdbapi.com/?apikey=416ed51a&s=Star";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((bookings) => {
        setBookings(bookings);
        console.log(bookings);
      });
  }, []);

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
                  <input type="submit" value="Nästa" className="submit__btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
