export const createEventAction = (event) => {
  return {
    type: "CREATE_EVENT",
    payload: event,
  };
};
