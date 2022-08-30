import { IUserBooking } from "models/IUserBooking";
import { Link } from "react-router-dom";

interface IGuestAmount {
  setBooking: React.Dispatch<React.SetStateAction<IUserBooking>>;
  booking: IUserBooking;
}

export const GuestAmount = (props: IGuestAmount) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBooking = { ...props.booking };
    newBooking.visitors = +e.target.value;

    props.setBooking(newBooking);
    console.log(newBooking);
  };
  return (
    <div>
      <p>Välj antal personer</p>
      <input onChange={handleChange} type="number" name="visitors" id="" />
      <Link to="/book">Tillbaka</Link>
      <Link to="/book/test2/test3">Nästa</Link>
    </div>
  );
};
