import { getAllBookings } from "api/api";
import { IUserBooking } from "models/IUserBooking";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { DateAndTime } from "../../components/DateAndTime/DateAndTime";
import { GenericButton } from "../../components/GenericButton/GenericButton";
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

  const [page, setpage] = useState(0);
  const formTitle = [
    "Välj tid och datum för att se tillgänglighet",
    "Välj antal personer",
    "Fyll i kontaktuppgifter",
  ];

  getAllBookings();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setpage((current) => current + 1);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setpage((current) => current - 1);
  };

  // const DisplayForm = () => {
  //   if (page === 0) {
  //     // return <DateAndTime setBooking={setBooking} booking={booking} />;
  //   } else if (page === 1) {
  //     return <GuestAmount setBooking={setBooking} booking={booking} />;
  //   } else if (page === 2) {
  //     return <SignUpInfo setBooking={setBooking} booking={booking} />;
  //   }
  // };

  return (
    <div className="hero-container">
      <div className="hero-filter">
        <Header />
        <div className="booking-content">
          <div className="form-container">
            <Routes>
              <Route
                index
                element={
                  <DateAndTime
                    setBooking={setBooking}
                    booking={booking}
                    // handleClick={handleClick}
                  />
                }
              />
              <Route
                path="/test2"
                element={
                  <GuestAmount
                    setBooking={setBooking}
                    booking={booking}
                    // handleClick={handleClick}
                  />
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
        {/* <form action="/">
          <div className="booking-content">
            <div className="form-container">
              <h1 className="form-heading">Boka bord!</h1>
              <h4 className="form-heading">{formTitle[page]}</h4>
              <div className="form-paragraph">{DisplayForm()}</div>
              <div className="btnform-container">
                <GenericButton
                  size="m"
                  fontSize="m"
                  handleClick={handleBackClick}
                >
                  Tillbaka
                </GenericButton>
                <GenericButton size="m" fontSize="m" handleClick={handleClick}>
                  Nästa
                </GenericButton>
              </div>
            </div>
          </div>
        </form> */}
      </div>
    </div>
  );
};
