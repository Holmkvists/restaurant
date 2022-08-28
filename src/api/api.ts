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
