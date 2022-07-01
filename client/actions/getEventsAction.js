export const getEventsAction = (events) => {
  return {
    type: "GET_EVENTS",
    payload: events,
  };
};
