export default function postEvent(event) {
  return {
    type: "POST_EVENT",
    payload: event,
  };
}
