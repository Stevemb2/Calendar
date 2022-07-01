export const eventReducer = (state = [], action) => {
  let events;
  let updatedEvent;

  switch (action.type) {
    case "GET_EVENTS":
      return state;
    case "POST_EVENTS":
      if (!Array.isArray(action.payload)) return;
      return action.payload;
    case "DELETE_EVENTS":
      return [];
    case "POST_EVENT":
      events = state;
      updatedEvent = action.payload;

      events = events.filter((event) => {
        return !(
          event.date === updatedEvent.date && event.title === updatedEvent.title
        );
      });

      return [...events, updatedEvent];
    case "PUT_EVENT":
      events = state;
      updatedEvent = action.payload;

      events = events.filter((event) => {
        return !(
          event.date === updatedEvent.date && event.title === updatedEvent.title
        );
      });

      if (state.length === events.length) return;

      return [...events, updatedEvent];
    case "DELETE_EVENT":
      return state.filter((event) => {
        return !(
          event.date === action.payload.date &&
          event.title === action.payload.title
        );
      });
    default:
      return state;
  }
};

/*
const events = [
  {
    date,
    title,
    description,
  },
  {
    date,
    title,
    description,
  },
];
*/
