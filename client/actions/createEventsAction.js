export const createEventsAction = (events) => {
  return {
    type: "CREATE_EVENTS",
    payload: events,
  };
};
