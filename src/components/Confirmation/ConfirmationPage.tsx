import { Address } from "components/Address/Address";
import { Header } from "components/Header/Header";
import { Link, useParams } from "react-router-dom";
import "./styles/confirmation.css";
import { useEffect } from "react";
import { cancelBooking } from "api/api";

interface ConfirmationProps {
  type: string;
}

export const Confirmation = (props: ConfirmationProps) => {
  const { id } = useParams();

  useEffect(() => {
    if (id && props.type != "bokningsbekraftelse") {
      cancelBooking(id);
    }
  }, []);

  return (
    <>
      <main className="confirmation">
        <Header />
        <div className="confirmation__message">
          {props.type == "bokningsbekraftelse" ? (
            <>
              <img src="/assets/happy-smiley.png" alt="happy-smiley" />
              <p>
                Din tid har nu bokats. Passa på att spana in vår meny{" "}
                <Link to="/meny">här!</Link>
              </p>
            </>
          ) : (
            <>
              <img src="/assets/sad-smiley.png" alt="sad-smiley" />
              <p>
                Din tid har avbokats. Boka en ny tid{" "}
                <Link to="/boka-bord">här!</Link>
              </p>
            </>
          )}
        </div>
      </main>
      <Address />
    </>
  );
};
