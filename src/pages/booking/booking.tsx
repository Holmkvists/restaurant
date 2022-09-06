import { getAllBookings } from "api/api";
import { IUserBooking } from "models/IUserBooking";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DateAndTime } from "../../components/DateAndTime/DateAndTime";
import { SignUpInfo } from "../../components/SignUpInfo/SignUpInfo";
import "../../pages/booking/styles/booking.css";
import { Header } from "../header/header";

export const Booking = () => {
  const [booking, setBooking] = useState<IUserBooking>({
    date: "",
    time: 0,
    visitors: 0,
    name: "",
    email: "",
    phone: "",
  });

  getAllBookings();

  return (
    <div className="hero__container">
      <div className="hero__filter">
        <Header />
        <div className="booking__content">
          <div className="form__container">
            <Routes>
              <Route
                index
                element={
                  <DateAndTime setBooking={setBooking} booking={booking} />
                }
              />
              <Route
                path="/personuppgifter"
                element={
                  <SignUpInfo setBooking={setBooking} booking={booking} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
