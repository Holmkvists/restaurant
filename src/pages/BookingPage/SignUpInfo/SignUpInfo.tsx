import { submitBooking } from "api/api";
import { IUserBooking } from "models/IUserBooking";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/signupinfo.css";

interface ISignUpInfo {
  setBooking: React.Dispatch<React.SetStateAction<IUserBooking>>;
  setDateSelected: React.Dispatch<React.SetStateAction<boolean>>;
  booking: IUserBooking;
}

export const SignUpInfo = (props: ISignUpInfo) => {
  const redirect = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBooking = { ...props.booking };
    if (e.target.name === "name") {
      newBooking.name = e.target.value;
    }

    if (e.target.name === "phone") {
      newBooking.phone = e.target.value;
    }

    if (e.target.name === "email") {
      newBooking.email = e.target.value;
    }

    props.setBooking(newBooking);
  };

  useEffect(() => {
    if (props.booking.name && props.booking.email && props.booking.phone) {
      setIsDisabled(false);
    }
  }, [props.booking]);

  const handleSubmit = async () => {
    await submitBooking(props.booking);
    redirect("/bokningsbekraftelse");
  };

  return (
    <div className="signup__container">
      <button
        className="arrow__btn"
        onClick={() => props.setDateSelected(false)}
      >
        <i className="gg-arrow-left"></i>
      </button>
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
          <button
            onClick={() => handleSubmit()}
            className="complete__btn"
            disabled={isDisabled}
          >
            Slutför bokning
          </button>
        </div>
      </main>
    </div>
  );
};
