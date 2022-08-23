import { Link } from "react-router-dom";
import "../../css/notfound.css";

export const NotFound = () => {
  return (
    <div className="container">
      <h1 className="notfound__heading">Oops, sidan hittades inte, 404.</h1>
      <Link className="notfound__btn" to={"/"}>
        Tillbaka hem
      </Link>
    </div>
  );
};
