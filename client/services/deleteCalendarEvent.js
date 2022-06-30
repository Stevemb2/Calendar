import axios from "axios";

export const deleteCalendarEvent = (date, title) => {
  const options = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    url: "event",
    data: {
      date,
      title,
    }
  };

  try {
    const response = await axios(options);

    const { value, err } = response.data;
    
    if (err) {
      return { err };
    } else {
      return { value }
    }
  } catch (err) {
    throw { err };
  }
};
