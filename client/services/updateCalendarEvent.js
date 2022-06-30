import axios from "axios";

export const updateCalendarEvent = (date, title, description) => {
  const options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    url: "event",
    data: {
      date,
      title,
      description,
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
