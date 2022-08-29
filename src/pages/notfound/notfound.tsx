import { Link } from "react-router-dom";
import "../notfound/styles/notfound.css";

export const NotFound = () => {
  return (
    <div className="container">
      <div className="notfound__container">
        <h1 className="notfound__heading">Oops, något blev fel,</h1>
        <h1 className="notfound__heading">sidan hittades inte!</h1>
        <Link className="notfound__btn" to={"/"}>
          Tillbaka hem
        </Link>
      </div>
    </div>
  );
};
