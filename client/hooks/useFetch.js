import { useEffect } from "react";

export const useFetch = (event, updatedEvent, method) => {
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch("/api/events", {
        method,
        body: JSON.stringify(updatedEvent),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      console.log(
        `useFetch: method: ${method}, data: ${JSON.stringify(data, null, 3)}`
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
          fetchEvent();
        }
      }
    }
  }, [updatedEvent.title, updatedEvent.description]);
};
