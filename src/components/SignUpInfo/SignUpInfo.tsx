import { postBooking } from "api/api";
import { IUserBooking } from "models/IUserBooking";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/signupinfo.css";

interface ISignUpInfo {
  setBooking: React.Dispatch<React.SetStateAction<IUserBooking>>;
  booking: IUserBooking;
}

export const SignUpInfo = (props: ISignUpInfo) => {
  const [isDisabled, setIsDisabled] = useState(true);

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

  useEffect(() => {
    if (props.booking.name && props.booking.email && props.booking.phone) {
      setIsDisabled(false);
    }
  }, [props.booking]);

  const handleSubmit = async () => {
    await postBooking(props.booking);
  };

  return (
    <div className="signup__container">
      <Link to="/boka-bord" className="back__btn">
        <p>
          <i className="gg-arrow-left"></i>
        </p>
      </Link>
      <header className="signup__header">
        <h1 className="heading__h1">Boka bord!</h1>
        <p>Fyll i kontaktuppgifter</p>
      </header>

      <main className="signup__main">
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
        </div>
        <div className="btn__div">
          <form action="/bokningsbekraftelse">
            <input
              type="submit"
              value="Slutför bokning"
              className="complete__btn"
              disabled={isDisabled}
            />
          </form>
        </div>
      </main>
    </div>
  );
};
