import { Address } from "components/address/address";
import { Header } from "components/Header/Header";
import { NotFound } from "pages/notfound/notfound";
import { Link, useParams } from "react-router-dom";
import "./styles/confirmationPage.css";

export const ConfirmationPage = () => {
  let { confirmation } = useParams();

  if (
    confirmation == "bokningsbekraftelse" ||
    confirmation == "avbokningsbekraftelse"
  ) {
    return (
      <main className="confirmation">
        <Header />
        <div className="confirmation__message">
          {confirmation == "bokningsbekraftelse" && (
            <>
              <img src="/assets/happy-smiley.png" alt="happy-smiley" />
              <p>
                Din tid har nu bokats. Passa på att spana in vår meny{" "}
                <Link to="/menu">här!</Link>
              </p>
            </>
          )}
          {confirmation == "avbokningsbekraftelse" && (
            <>
              <img src="/assets/sad-smiley.png" alt="sad-smiley" />
              <p>
                Din tid har avbokats. Boka en ny tid{" "}
                <Link to="/book">här!</Link>
              </p>
            </>
          )}
        </div>
        <Address />
      </main>
    );
  }

  return <NotFound />;
};
