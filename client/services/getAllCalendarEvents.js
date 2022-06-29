import axios from "axios";

export const getAllCalendarEvents = async () => {
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    url: "event",
  };

  try {
    const response = await axios(options);

    const { isError, message, eventArray } = response.data;

    if (isError) {
      throw message;
    } else {
      return eventArray;
    }
  } catch (err) {
    throw err;
  }
};
