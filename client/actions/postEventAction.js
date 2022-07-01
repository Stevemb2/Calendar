export const postEventAction = (event) => {
  return {
    type: "POST_EVENT",
    payload: event,
  };
};
