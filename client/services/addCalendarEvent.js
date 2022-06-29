import axios from "axios";

export const addCalendarEvent = () => {
    const options = {
        method: "post",
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
