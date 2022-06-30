export default function deleteEvent(event) {
  return {
    type: "DELETE_EVENT",
    payload: event,
  };
}
