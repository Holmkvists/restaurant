import { getAllBookings } from "api/api";
import { IBooking } from "models/IBooking";
import { useEffect, useState } from "react";
import { AdminTableRow } from "./AdminTableRow/AdminTableRow";

export const AdminTableBody = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    async function getBookings() {
      const bookings = await getAllBookings();
      setBookings(bookings);
      console.log(bookings);
    }
    getBookings();
  }, []);

  return (
    <tbody>
      {bookings.map((booking) => (
        <AdminTableRow booking={booking} key={booking._id} />
      ))}
    </tbody>
  );
};
