export const deleteEventAction = (event) => {
  return {
    type: "DELETE_EVENT",
    payload: event,
  };
};
