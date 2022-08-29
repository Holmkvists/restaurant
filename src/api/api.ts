import { IBooking } from "models/IBooking";

/**
 * The base URL to the API.
 */
const API_URL = "http://localhost:8080" as const;

/**
 * Fetches all current bookings from  the API
 * @returns An array of current bookings
 */
export const getAllBookings = async (): Promise<IBooking[]> => {
  try {
    const response = await fetch(`${API_URL}/bookings/getAllBookings`);
    const body = await response.json();
    return body.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Updates a booking by sending a patch request
 * @param booking IBooking
 * @returns A boolean indicating success or fail
 */
export const patchBooking = async (booking: IBooking) => {
  try {
    const response = await fetch(`${API_URL}/bookings/patchBooking`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });
    return response.status == 200 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};