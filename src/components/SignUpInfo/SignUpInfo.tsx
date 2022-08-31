import { postBooking } from "api/api";
import { IUserBooking } from "models/IUserBooking";
import { Link } from "react-router-dom";
import "./styles/signupinfo.css";

interface ISignUpInfo {
  setBooking: React.Dispatch<React.SetStateAction<IUserBooking>>;
  booking: IUserBooking;
}

export const SignUpInfo = (props: ISignUpInfo) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBooking = { ...props.booking };
    if (e.target.name == "name") {
      newBooking.name = e.target.value;
    }

    if (e.target.name == "phone") {
      newBooking.phone = e.target.value;
    }

    if (e.target.name == "email") {
      newBooking.email = e.target.value;
    }

    props.setBooking(newBooking);
    console.log(newBooking);
  };

  const handleSubmit = async () => {
    await postBooking(props.booking);
  };

  return (
    <div>
      <p>Fyll i kontaktuppgifter</p>
      <div className="user-input__container">
        <label htmlFor="">Förnamn</label>
        <input
          onChange={handleChange}
          type="text"
          className="user-input"
          name="name"
        />
      </div>
      <div className="user-input__container">
        <label htmlFor="">Telefonnummer</label>
        <input
          onChange={handleChange}
          type="text"
          className="user-input"
          name="phone"
        />
      </div>
      <div className="user-input__container">
        <label htmlFor="">Epostadress</label>
        <input
          onChange={handleChange}
          type="text"
          className="user-input"
          name="email"
        />
        <Link to="/book/test2">Tillbaka</Link>
        <button type="submit" onClick={handleSubmit}>
          Slutför bokning
        </button>
      </div>
    </div>
  );
};
