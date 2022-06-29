import { EventCalendar } from "../database/EventCalendar";

export const CalendarController = () => {
  const eventCalendar = EventCalendar();

  const getAllCalendarEvents = (req, res) => {
    res.type("application/json");

    const events = eventCalendar.getEvents();

    res.status(200).json([
      {
        date: "23-6-2022",
        title: "test",
        description: "test description",
        method: "GET",
      },
    ]);
  };

  const createCalendarEvent = (req, res) => {
    res.type("application/json");

    const event = eventCalendar.postEvent();

    res.status(200).json(event);
  };

  const updateCalendarEvent = (req, res) => {
    res.type("application/json");

    const event = eventCalendar.putEvent();

    res.status(200).json(event);
  };

  const deleteCalendarEvent = (req, res) => {
    res.type("application/json");

    const events = eventCalendar.deleteEvent();

    res.status(200).json(event);
  };

  Object.freeze({
    getAllCalendarEvents,
    createCalendarEvent,
    updateCalendarEvent,
    deleteCalendarEvent,
  });
};
