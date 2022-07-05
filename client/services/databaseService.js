import axios from "axios";

export const databaseService = async (event, method) => {
  const { date, title, description } = event;

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

  const response = await axios(options);

  const { value, err } = response.data;

  if (err) throw err;

  return value;
};
