import { getAvailableBookings } from "api/api";
import { GenericButton } from "components/GenericButton/GenericButton";
import { IUserBooking } from "models/IUserBooking";
import { Booking } from "pages/booking/booking";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/dateandtime.css";

interface IDateAndTimeProps {
  setBooking: React.Dispatch<React.SetStateAction<IUserBooking>>;
  booking: IUserBooking;
}

export const DateAndTime = (props: IDateAndTimeProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBooking = { ...props.booking };
    if (e.target.name == "date") {
      newBooking.date = e.target.value;
    }

    if (e.target.name == "time") {
      newBooking.time = +e.target.value;
    }

    if (e.target.name == "visitors") {
      newBooking.visitors = +e.target.value;
    }

    props.setBooking(newBooking);

    console.log(newBooking);
  };

  const checkAvailability = () => {
    getAvailableBookings(
      props.booking.date,
      props.booking.time.toString(),
      props.booking.visitors.toString()
    );
  };

  return (
    <div className="datetime-container">
      <div className="booking__input">
        <p>Välj tid och datum för att se tillgänglighet</p>
        <label htmlFor="">1. Välj datum</label>
        <input onChange={handleChange} type="date" name="date" id="" />
      </div>
      <div className="booking__input">
        <label htmlFor="">2. Välj en tid</label>
        <div className="booking__radiolabel">
          <div>
            <input
              onChange={handleChange}
              type="radio"
              name="time"
              id=""
              value="18"
            />
            <label htmlFor="">18:00</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              name="time"
              id=""
              value="21"
            />
            <label htmlFor="">21:00</label>
          </div>
          <div>
            <p>Välj antal personer</p>
            <input
              onChange={handleChange}
              type="number"
              name="visitors"
              id=""
            />
          </div>
          <Link onClick={checkAvailability} to="/book/test2/test3">
            Nästa
          </Link>
        </div>
      </div>
    </div>
  );
};
