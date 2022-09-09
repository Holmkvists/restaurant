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

  const [visitors, setVisitors] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  function editVisitors(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.target.value < 1) {
      setVisitors("1");
    } else if (+e.target.value > 90) {
      setVisitors("90");
    } else {
      setVisitors(e.target.value);
    }
    const tempBooking = { ...props.booking };
    tempBooking.visitors = +visitors;
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();

    const newBooking = { ...props.booking };
    newBooking.visitors = +visitors;
    newBooking.date = date;
    newBooking.time = +time;

    props.setBooking(newBooking);

    props.setDateSelected(true);
  }
  useEffect(() => {
    async function checkBookings() {
      if (visitors && time && date) {
        const newBooking = { ...props.booking };
        newBooking.visitors = +visitors;
        newBooking.time = +time;
        newBooking.date = date;
        props.setBooking(newBooking);

        const isEnoughTables = await checkEnoughTables(
          date,
          time.toString(),
          visitors.toString()
        );

        setIsAttempted(true);

        if (isEnoughTables) {
          setIsDisabled(false);
          return;
        }

        setIsDisabled(true);
      }
    }
    checkBookings();
  }, [visitors, time, date]);

  return (
    <div className="datetime__container">
      <div className="heading__container">
        <h1 className="heading__h1">Boka bord!</h1>
        <p>Välj tid och datum för att se tillgänglighet</p>
      </div>
      <div className="date-time__div">
        <div className="date__time-container">
          <div className="date__input-label">
            <label htmlFor="">1. Välj datum</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              name="date"
              data-cy="dateInput"
              className="date__input"
            />
          </div>
          <div className="date__input-label">
            <label htmlFor="">2. Välj antal personer</label>
            <input
              onChange={editVisitors}
              type="number"
              name="visitors"
              min={1}
              max={90}
              value={visitors}
              data-cy="visitorInput"
              className="amount__input"
            />
          </div>
        </div>
        <div className="radio__btn-container">
          <label htmlFor="">3. Välj en tid</label>
          <div className="booking__radiolabel">
            <div>
              <input
                onChange={(e) => setTime(e.target.value)}
                type="radio"
                name="time"
                value="18"
                data-cy="dinner18"
              />
              <label htmlFor="">18:00</label>
            </div>
            <div>
              <input
                onChange={(e) => setTime(e.target.value)}
                type="radio"
                name="time"
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
          onClick={handleSubmit}
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
