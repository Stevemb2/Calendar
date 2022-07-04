export const events = (state = [], action) => {
  let events;

  switch (action.type) {
    case "GET_EVENTS":
      return state;
    case "CREATE_EVENTS":
      const allCreatedEvents = action.payload;

      console.log(
        `created events: ${JSON.stringify(allCreatedEvents, null, 3)}`
      );

      if (!Array.isArray(allCreatedEvents)) return;

      return allCreatedEvents;
    case "DELETE_EVENTS":
      return [];
    case "CREATE_EVENT":
      const createdEvent = action.payload;

      console.log(`Created event: ${JSON.stringify(createdEvent, null, 3)}`);

      events = state;

      events = events.filter((event) => {
        return !(
          event.date === createdEvent.date && event.title === createdEvent.title
        );
      });

      const createdEvents = [...events, createdEvent];

      console.log(`Created events: ${JSON.stringify(createdEvents, null, 3)}`);

      return createdEvents;
    case "UPDATE_EVENT":
      const updatedEvent = action.payload;

      console.log(`updated event: ${JSON.stringify(updatedEvent, null, 3)}`);

      events = state;

      const filteredEvents = events.filter((event) => {
        return !(
          event.date === updatedEvent.date && event.title === updatedEvent.title
        );
      });

      if (events.length === filteredEvents.length) return;

      const updatedEvents = [...filteredEvents, updatedEvent];

      console.log(`updatedEvents: ${JSON.stringify(updatedEvents, null, 3)}`);

      return [...events, updatedEvent];
    case "DELETE_EVENT":
      const deletedEvent = action.payload;

      console.log(`deleted event: ${JSON.stringify(deletedEvent, null, 3)}`);

      const eventsMinusDeletedEvent = state.filter((event) => {
        return !(
          event.date === deletedEvent.date && event.title === deletedEvent.title
        );
      });

      console.log(
        `deleted events: ${JSON.stringify(eventsMinusDeletedEvent, null, 3)}`
      );

      return eventsMinusDeletedEvent;
    default:
      return state;
  }
};
