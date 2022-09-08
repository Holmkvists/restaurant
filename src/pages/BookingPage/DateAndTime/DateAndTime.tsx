import { checkEnoughTables } from "api/api";
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
    if (e.target.name === "date") {
      newBooking.date = e.target.value;
    }

    if (e.target.name === "time") {
      newBooking.time = +e.target.value;
    }

    if (e.target.name === "visitors") {
      newBooking.visitors = +e.target.value;
    }

    props.setBooking(newBooking);
  };

  useEffect(() => {
    const checkBookings = async () => {
      if (props.booking.visitors && props.booking.time && props.booking.date) {
        const isEnoughTables = await checkEnoughTables(
          props.booking.date,
          props.booking.time.toString(),
          props.booking.visitors.toString()
        );

        setIsAttempted(true);

        if (isEnoughTables) {
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
      <div className="heading__container">
        <h1 className="heading__h1">Boka bord!</h1>
        <p>Välj tid och datum för att se tillgänglighet</p>
      </div>
      <div className="date-time__div">
        <div className="date__time-container">
          <div className="date__input-label">
            <label htmlFor="">Välj datum</label>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              data-cy="dateInput"
              className="date__input"
            />
          </div>
          {/* <div className="visitors__container"> */}
          <div className="date__input-label">
            <label htmlFor="">Välj antal personer</label>
            <input
              onChange={handleChange}
              type="number"
              name="visitors"
              min={1}
              max={90}
              data-cy="visitorInput"
              className="amount__input"
            />
            {/* </div> */}
          </div>
        </div>
        <div className="radio__btn-container">
          <label htmlFor="">Välj en tid</label>
          <div className="booking__radiolabel">
            <div>
              <input
                onChange={handleChange}
                type="radio"
                name="time"
                id=""
                value="18"
                data-cy="dinner18"
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
                data-cy="dinner21"
              />
              <label htmlFor="">21:00</label>
            </div>
          </div>
        </div>
      </div>

      <div className="next__btn-container">
        {isDisabled && isAttempted && (
          <p className="fullybooked__msg">Tyvärr fullbokat</p>
        )}
        <button
          onClick={() => props.setDateSelected(true)}
          disabled={isDisabled}
          className="next__btn"
          data-cy="nextButton"
        >
          Nästa
        </button>
      </div>
    </div>
  );
};
