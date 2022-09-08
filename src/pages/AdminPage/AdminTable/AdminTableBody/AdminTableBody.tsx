import { getAllBookings, getArchivedBookings } from "api/api";
import { IBooking } from "models/IBooking";
import { useEffect, useState } from "react";
import { AdminTableRow } from "./AdminTableRow/AdminTableRow";

interface AdminTableBodyProps {
  active: boolean;
}
export const AdminTableBody = (props: AdminTableBodyProps) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function getBookings() {
      const bookings = props.active
        ? await getAllBookings()
        : await getArchivedBookings();
      setBookings(bookings);
    }
    getBookings();
  }, [props.active, update]);

  return (
    <tbody>
      {bookings.map((booking) => (
        <AdminTableRow
          setUpdate={setUpdate}
          update={update}
          active={props.active}
          booking={booking}
          key={booking._id}
        />
      ))}
    </tbody>
  );
};
