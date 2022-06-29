import axios from "axios";

export const deleteCalendarEvent = () => {
    const options = {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        url: "event",
      };
    
      try {
        const response = await axios(options);
    
        const { isError, message, event } = response.data;
    
        if (isError) {
          throw message;
        } else {
          return event;
        }
      } catch (err) {
        throw err;
      }
};
