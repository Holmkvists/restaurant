import { Address } from "components/Address/Address";
import { Header } from "components/Header/Header";
import { Link, useParams } from "react-router-dom";
import "./styles/confirmationPage.css";
import { useEffect } from "react";
import { cancelBooking } from "api/api";

interface ConfirmationPageProps {
  type: string;
}

export const ConfirmationPage = (props: ConfirmationPageProps) => {
  const { id } = useParams();

  useEffect(() => {
    if (id && props.type != "bokningsbekraftelse") {
      cancelBooking(id);
      console.log(id);
    }
  }, []);

  return (
    <main className="confirmation">
      <Header />
      <div className="confirmation__message">
        {props.type == "bokningsbekraftelse" ? (
          <>
            <img src="/assets/happy-smiley.png" alt="happy-smiley" />
            <p>
              Din tid har nu bokats. Passa på att spana in vår meny{" "}
              <Link to="/menu">här!</Link>
            </p>
          </>
        ) : (
          <>
            <img src="/assets/sad-smiley.png" alt="sad-smiley" />
            <p>
              Din tid har avbokats. Boka en ny tid <Link to="/book">här!</Link>
            </p>
          </>
        )}
      </div>
      <Address />
    </main>
  );
};
