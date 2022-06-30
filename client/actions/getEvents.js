export default function getEvents(events) {
  return {
    type: "GET_EVENTS",
    payload: events,
  };
}
