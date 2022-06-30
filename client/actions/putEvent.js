export default function putEvent(event) {
  return {
    type: "PUT_EVENT",
    payload: event,
  };
}
