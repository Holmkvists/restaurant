import { IUserBooking } from "models/IUserBooking";
import { useState } from "react";
import { DateAndTime } from "./DateAndTime/DateAndTime";
import { SignUpInfo } from "./SignUpInfo/SignUpInfo";
import "./styles/booking.css";
import { Header } from "../../components/Header/Header";

export const Booking = () => {
  const [dateSelected, setDateSelected] = useState(false);
  const [booking, setBooking] = useState<IUserBooking>({
    date: "",
    time: 0,
    visitors: 0,
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="hero__container">
      <div className="hero__filter">
        <Header />
        <div className="booking__content">
          <div className="form__container">
            {dateSelected ? (
              <SignUpInfo
                setBooking={setBooking}
                booking={booking}
                setDateSelected={setDateSelected}
              />
            ) : (
              <DateAndTime
                setBooking={setBooking}
                booking={booking}
                setDateSelected={setDateSelected}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
