import "./styles/dateandtime.css";

export const DateAndTime = () => {
  return (
    <div className="datetime-container">
      <form action="">
        <div className="booking__input">
          <label htmlFor="">1. Välj datum</label>
          <input type="date" name="" id="" />
        </div>
        <div className="booking__input">
          <label htmlFor="">2. Välj en tid</label>
          <div className="booking__radiolabel">
            <div>
              <input type="radio" name="TimeBtn" id="" />
              <label htmlFor="">18:00</label>
            </div>
            <div>
              <input type="radio" name="TimeBtn" id="" />
              <label htmlFor="">21:00</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
