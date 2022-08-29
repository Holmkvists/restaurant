import "./styles/signupinfo.css";

export const SignUpInfo = () => {
  return (
    <div>
      <div className="user-input__container">
        <label htmlFor="">Förnamn</label>
        <input type="text" className="user-input" />
      </div>
      <div className="user-input__container">
        <label htmlFor="">Telefonnummer</label>
        <input type="text" className="user-input" />
      </div>
      <div className="user-input__container">
        <label htmlFor="">Epostadress</label>
        <input type="text" className="user-input" />
      </div>
    </div>
  );
};
