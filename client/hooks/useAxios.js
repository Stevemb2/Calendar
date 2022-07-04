import { useEffect } from "react";
import axios from "axios";

export const useAxios = (event, method) => {
  const { date, title, description } = event;

  useEffect(() => {
    (async () => {
      if (!date || !title) return;

      console.log(
        `useAxios: date: ${date}, title: ${title}, description: ${description}, method: ${method}`
      );

      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        url: "event",
        data: { date, title, description },
      };

      try {
        const response = await axios(options);

        const { value, err } = response.data;

        console.log(
          `axios returned value: ${JSON.stringify(
            value,
            null,
            3
          )}, err: ${JSON.stringify(err, null, 3)}`
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, [title, description]);
};
