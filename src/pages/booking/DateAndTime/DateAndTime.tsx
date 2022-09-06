import { getAvailableBookings } from "api/api";
import { IUserBooking } from "models/IUserBooking";
import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/dateandtime.css";

interface IDateAndTimeProps {
  setBooking: React.Dispatch<React.SetStateAction<IUserBooking>>;
  setDateSelected: React.Dispatch<React.SetStateAction<boolean>>;
  booking: IUserBooking;
}

export const DateAndTime = (props: IDateAndTimeProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isAttempted, setIsAttempted] = useState(false);

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

  useEffect(() => {
    const checkBookings = async () => {
      if (props.booking.visitors && props.booking.time && props.booking.date) {
        const isAvailable = await getAvailableBookings(
          props.booking.date,
          props.booking.time.toString(),
          props.booking.visitors.toString()
        );

        setIsAttempted(true);

        if (isAvailable) {
          setIsDisabled(false);
          return;
        }

        setIsDisabled(true);
      }
    };
    checkBookings();
  }, [props.booking]);

  return (
    <div className="datetime__container">
      <div>
        <h1 className="heading__h1">Boka bord!</h1>
        <p>Välj tid och datum för att se tillgänglighet</p>
      </div>
      <div className="date-time__div">
        <div className="booking__input">
          <div className="date__input-label">
            <label htmlFor="">Välj datum</label>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              id=""
              className="date__input"
            />
          </div>
          <div className="amount__div">
            <p>Välj antal personer</p>
            <input
              onChange={handleChange}
              type="number"
              name="visitors"
              className="amount__input"
            />
          </div>
        </div>
        <div className="booking__input2">
          <label htmlFor="">Välj en tid</label>
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
          </div>
        </div>
      </div>
      <div className="form__div">
        <button
          onClick={() => props.setDateSelected(true)}
          disabled={isDisabled}
          className="next__btn"
        >
          Nästa
        </button>
        {isDisabled && isAttempted && <p>Tyvärr fullbokat</p>}
      </div>
    </div>
  );
};
