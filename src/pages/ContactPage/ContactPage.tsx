import { Address } from "components/Address/Address";
import { Header } from "components/Header/Header";
import "./styles/contact.css";
export const ContactPage = () => {
  return (
    <div className="image__container">
      <div className="background__filter">
        <Header />
        <div className="heading__info">
          <h1 className="h1__heading">Välkommen!</h1>
          <div className="contact__info-text" data-cy="infoText">
            <h3>
              Lokalen är liten men mysig, det betyder tyvärr också att det kan
              vara trångt att få plats med barnvagn och liknade. om så är
              fallet, maila oss gärna så ska vi försöka lösa det!
            </h3>
          </div>
        </div>
        <div className="contact__div">
          <div className="contact__openhours" data-cy="openHours">
            <h3>Middag </h3>
            <h3>Måndag - Söndag:</h3>
            <h3>18:00 - 21:00</h3>
            <h3>21:00 - 24:00</h3>
          </div>
          <div className="contact__telefon" data-cy="phone">
            <h3>Telefonnummer: 08-796 81 02</h3>
            <h3>våra telefon tider är:</h3>
            <h3>onsdag-söndag 16:00-21:00</h3>
            <p>Malmskillnadsgatan 13, 111 57, Stockholm</p>
          </div>
        </div>
      </div>
    </div>
  );
};
