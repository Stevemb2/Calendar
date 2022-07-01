export const postEventsAction = (events) => {
  return {
    type: "POST_EVENTS",
    payload: events,
  };
};
