import { getAllBookings } from "api/api";
import { IUserBooking } from "models/IUserBooking";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DateAndTime } from "../../components/DateAndTime/DateAndTime";
import { GuestAmount } from "../../components/GuestAmount/GuestAmount";
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
    <div className="hero-container">
      <div className="hero-filter">
        <Header />
        <div className="booking-content">
          <div className="form-container">
            <h1>Boka bord!</h1>
            <Routes>
              <Route
                index
                element={
                  <DateAndTime setBooking={setBooking} booking={booking} />
                }
              />
              <Route
                path="/test2"
                element={
                  <GuestAmount setBooking={setBooking} booking={booking} />
                }
              />
              <Route
                path="/test2/test3"
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
