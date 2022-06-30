import { useEffect } from "react";
import axios from "axios";

export const useAxios = (event, updatedEvent, method) => {
  useEffect(() => {
    const handleEvent = async () => {
      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        url: "event",
      };

      const response = await axios(options);

      const { isError, message, event } = response.data;

      console.log(
        `useFetch: method: ${method}, data: ${JSON.stringify(
          response.data,
          null,
          3
        )}`
      );
    };

    if (event && updatedEvent) {
      if (method === "POST" || method === "PUT" || method === "DELETE") {
        console.log(
          `fetch: method: ${method}, event: ${JSON.stringify(event, null, 3)}`
        );
        console.log(
          `fetch: method: ${method}, updatedEvent: ${JSON.stringify(
            updatedEvent,
            null,
            3
          )}`
        );

        if (
          event.title !== updatedEvent.title ||
          event.description !== updatedEvent.description
        ) {
          handleEvent();
        }
      }
    }
  }, [updatedEvent.title, updatedEvent.description]);
};
