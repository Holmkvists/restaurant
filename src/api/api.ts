import { IBooking } from "models/IBooking";
import { IUserBooking } from "models/IUserBooking";

/**
 * The base URL to the API.
 */
const API_URL = "http://localhost:8080" as const;

/**
 * Fetches all current bookings from  the API
 * @returns {Promise<IBooking[]>} An array of current bookings
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
 * Fetches all archived bookings from the API
 * @returns {Promise<IBooking[]>} An array of current bookings
 */
export const getArchivedBookings = async (): Promise<IBooking[]> => {
  try {
    const response = await fetch(`${API_URL}/bookings/getArchivedBookings`);
    const body = await response.json();
    return body.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Checks if there is room for this booking at the provided date/time
 * @param date Date of the booking
 * @param time Time of the booking
 * @param visitors Amount of visitors
 * @returns {boolean} True/False
 */
export const checkEnoughTables = async (
  date: string,
  time: string,
  visitors: string
): Promise<boolean> => {
  try {
    const response = await fetch(
      `${API_URL}/bookings/getAvailableBookings/` +
        `?date=${date}` +
        `&time=${time}` +
        `&visitors=${visitors}`
    );

    const body = await response.json();

    if (typeof body.data[0] !== "boolean") {
      return false;
    }

    return body.data[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * Submits a booking to he server.
 * @param booking
 */
export const submitBooking = async (booking: IUserBooking) => {
  try {
    await fetch(`${API_URL}/bookings/createBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Updates a booking by sending a patch request
 * @param booking IBooking
 */
export const updateBooking = async (booking: IBooking) => {
  try {
    const result = await fetch(`${API_URL}/bookings/patchBooking`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });
    const data = await result.json();
    if (data.error) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Deletes the booking from the database.
 * @param bookingId ID of the booking
 */
export const cancelBooking = async (bookingId: string) => {
  try {
    await fetch(`${API_URL}/bookings/cancelBooking`, {
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
