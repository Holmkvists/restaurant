// IMPORTS

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { cancelBooking } from "api/api";
import { Header } from "components/Header/Header";
import { Address } from "components/Address/Address";
import "./styles/confirmation.css";

// PROPS

interface ConfirmationProps {
  type: string;
}

// COMPONENT

export const Confirmation = (props: ConfirmationProps) => {
  const { id } = useParams();

  // DELETES BOOKING FROM DATABASE IF USER IS DIRECTED TO
  // THIS PAGE THROUGH CANCELLATION LINK IN RECEIVED EMAIL
  useEffect(() => {
    if (id && props.type !== "bokningsbekraftelse") {
      cancelBooking(id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="confirmation">
        <Header />
        <div className="confirmation__message">
          {props.type === "bokningsbekraftelse" ? (
            <>
              <img src="/assets/happy-smiley.png" alt="happy-smiley" />
              <p>
                Din tid har nu bokats. Passa på att spana in vår meny
                <Link to="/meny"> här!</Link>
              </p>
            </>
          ) : (
            <>
              <img src="/assets/sad-smiley.png" alt="sad-smiley" />
              <p>
                Din tid har avbokats. Boka en ny tid
                <Link to="/boka-bord"> här!</Link>
              </p>
            </>
          )}
        </div>
      </main>
      <Address />
    </>
  );
};
