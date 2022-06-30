import axios from "axios";

export const createCalendarEvent = () => {
    const options = {
        method: "post",
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
