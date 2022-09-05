import { IBooking } from "models/IBooking";
import { IUserBooking } from "models/IUserBooking";

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

export const getAvailableBookings = async (
  date: string,
  time: string,
  visitors: string
) => {
  try {
    const response = await fetch(
      `${API_URL}/bookings/getAvailableBookings/` +
        `?date=${date}` +
        `&time=${time}` +
        `&visitors=${visitors}`
    );
    const body = await response.json();
    return body.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const postBooking = async (booking: IUserBooking) => {
  try {
    const response = await fetch(`${API_URL}/bookings/createBooking`, {
      method: "POST",
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

/**
 * Deletes the booking from the database.
 * @param bookingId ID of the booking
 */
export const cancelBooking = async (bookingId: string) => {
  try {
    const response = await fetch(`${API_URL}/bookings/cancelBooking`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: bookingId }),
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Attempt to authorize as an admin towards the API
 * @param secret The secret given by a user
 * @returns Object with success status and a message
 */
export const authorizeAdmin = async (secret: string) => {
  try {
    const response = await fetch(`${API_URL}/authorize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret }),
    });
    if (response.status === 200) {
      return { success: true, message: "" };
    }
    if (response.status === 401) {
      return { success: false, message: "Invalid secret" };
    }
    return { success: false, message: "An error has occured, try again later" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error has occured, try again later" };
  }
};
