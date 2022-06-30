export default function postEvents(events) {
  return {
    type: "POST_EVENTS",
    payload: events,
  };
}
