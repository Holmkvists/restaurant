import { Header } from "components/Header/Header";
import "../contact/styles/contact.css";
export const Contact = () => {
  return (
    <div className="image__container">
      <div className="tester">
        <Header />
        <div className="heading__info">
          <h1 className="h1__heading">Välkommen!</h1>
          <div className="contact__info2">
            <h3>
              Lokalen är liten men mysig, det betyder tyvärr också att det kan
            </h3>
            <h3>vara trångt att få plats med barnvagn och liknade. om så är</h3>
            <h3>fallet, maila oss gärna så ska vi försöka lösa det!</h3>
          </div>
        </div>
        <div className="contact__div">
          <div className="contact__info3">
            <h3>Middag </h3>
            <h3>Måndag - Söndag:</h3>
            <h3>18:00 - 21:00</h3>
            <h3>21:00 - 24:00</h3>
          </div>
          <div className="contact__info">
            <h3>telefon</h3>
            <h3>telefonnummer: 08-796 81 02</h3>
            <h3>våra telefon tider är:</h3>
            <h3>onsdag-söndag 16:00-21:00</h3>
            <p>Malmskillnadsgatan 13, 111 57, Stockholm</p>
          </div>
        </div>
      </div>
    </div>
  );
};
