import { useEffect } from "react";
import axios from "axios";

export const useAxios = (event, updatedEvent, method) => {
  const log = (method, data) => {
    console.log(`useAxios: ${method}, event: ${JSON.stringify(data, null, 3)}`);
  };

  useEffect(
    (async () => {
      if (event && updatedEvent) {
        if (method === "POST" || method === "PUT" || method === "DELETE") {
          log(method, event);
          log(method, updatedEvent);

          if (
            event.title !== updatedEvent.title ||
            event.description !== updatedEvent.description
          ) {
            const options = {
              method,
              headers: {
                "Content-Type": "application/json",
              },
              url: "event",
              data: updatedEvent,
            };

            const response = await axios(options);

            //const { value, err } = response.data;

            log(method, response);
          }
        }
      }
    })(),
    [updatedEvent.title, updatedEvent.description]
  );
};
