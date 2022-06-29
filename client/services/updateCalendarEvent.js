import axios from "axios";

export const updateCalendarEvent = () => {
    const options = {
        method: "put",
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
