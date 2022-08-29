import React, { useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { DateAndTime } from "../../components/DateAndTime/DateAndTime";
import { GenericButton } from "../../components/GenericButton/GenericButton";
import { GuestAmount } from "../../components/GuestAmount/GuestAmount";
import { SignUpInfo } from "../../components/SignUpInfo/SignUpInfo";
import "../../pages/booking/styles/booking.css";
import { Header } from "../header/header";

export const Booking = () => {
  const [page, setpage] = useState(0);
  const formTitle = [
    "Välj tid och datum för att se tillgänglighet",
    "Välj antal personer",
    "Fyll i kontaktuppgifter",
  ];

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setpage((current) => current + 1);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setpage((current) => current - 1);
  };

  const DisplayForm = () => {
    if (page === 0) {
      return <DateAndTime />;
    } else if (page === 1) {
      return <GuestAmount />;
    } else if (page === 2) {
      return <SignUpInfo />;
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-filter">
        <Header />
        <form action="">
          <div className="booking-content">
            <div className="form-container">
              <h1 className="form-heading">Boka bord!</h1>
              <h4 className="form-heading">{formTitle[page]}</h4>
              <div className="form-paragraph">{DisplayForm()}</div>
              <div className="btnform-container">
                <BackButton
                  size="m"
                  fontSize="m"
                  handleBackClick={handleBackClick}
                >
                  Tillbaka
                </BackButton>
                <GenericButton
                  size="m"
                  fontSize="m"
                  handleNextClick={handleNextClick}
                >
                  Nästa
                </GenericButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
