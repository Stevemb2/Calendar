import axios from "axios";

export const getDatabaseServicePromise = (event, method) => {
  const { date, title, description } = event;

  return new Promise((resolve, reject) => {
    console.log(
      `database service: date: ${date}, title: ${title}, description: ${description}, method: ${method}`
    );

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      url: "event",
      data: { date, title, description },
    };

    axios(options)
      .then((response) => {
        const { value, err } = response.data;

        if (err) reject(err);

        resolve(value);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
