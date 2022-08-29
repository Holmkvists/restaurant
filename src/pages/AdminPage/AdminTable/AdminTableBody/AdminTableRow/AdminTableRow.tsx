import { patchBooking } from "api/api";
import { GenericButton } from "components/GenericButton/GenericButton";
import { IBooking } from "models/IBooking";
import { useState } from "react";
import "./styles/adminTableRow.css";

export const AdminTableRow = (props: AdminTableRowProps) => {
  const id = props.booking._id;

  const [date, setDate] = useState(props.booking.date);
  const [time, setTime] = useState(props.booking.time);
  const [email, setEmail] = useState(props.booking.email);
  const [tables, setTables] = useState(props.booking.tables);

  const [isEditable, setIsEditable] = useState(false);
  const [style, setStyle] = useState({ backgroundColor: "transparent" });

  const handleEdit = () => {
    setIsEditable(!isEditable);
    const newStyle =
      style.backgroundColor === "transparent" ? "#ffbf00" : "transparent";
    setStyle({ backgroundColor: newStyle });
  };

  const handleSave = async () => {
    const booking: IBooking = {
      _id: id,
      email,
      date,
      time,
      tables,
    };
    await patchBooking(booking);
  };

  return (
    <tr>
      <td>{id}</td>
      <td
        style={style}
        suppressContentEditableWarning
        contentEditable={isEditable}
        onBlur={(e) => setEmail(e.currentTarget.innerText)}
      >
        {email}
      </td>
      <td
        style={style}
        suppressContentEditableWarning
        contentEditable={isEditable}
        onBlur={(e) => setDate(e.currentTarget.innerText)}
      >
        {date}
      </td>
      <td
        style={style}
        suppressContentEditableWarning
        contentEditable={isEditable}
        onBlur={(e) => setTime(e.currentTarget.innerText)}
      >
        {time}
      </td>
      <td
        style={style}
        suppressContentEditableWarning
        contentEditable={isEditable}
        onBlur={(e) => setTables(e.currentTarget.innerText)}
      >
        {tables}
      </td>
      <td>
        <GenericButton size="s" handleClick={(e) => handleEdit()}>
          Edit
        </GenericButton>
      </td>
      <td>
        <GenericButton size="s" handleClick={() => handleSave()}>
          Save
        </GenericButton>
      </td>
    </tr>
  );
};

interface AdminTableRowProps {
  booking: IBooking;
}
