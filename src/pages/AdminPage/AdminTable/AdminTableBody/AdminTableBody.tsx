import { getAllBookings, getArchivedBookings } from "api/api";
import { IBooking } from "models/IBooking";
import { useEffect, useState } from "react";
import { AdminTableRow } from "./AdminTableRow/AdminTableRow";

interface AdminTableBodyProps {
  active: boolean;
}
export const AdminTableBody = (props: AdminTableBodyProps) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    async function getBookings() {
      const bookings = props.active
        ? await getAllBookings()
        : await getArchivedBookings();
      setBookings(bookings);
    }
    getBookings();
  }, [props.active]);

  return (
    <tbody>
      {bookings.map((booking) => (
        <AdminTableRow booking={booking} key={booking._id} />
      ))}
    </tbody>
  );
};
