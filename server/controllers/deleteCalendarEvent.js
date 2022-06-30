import { EventCalendar } from "../database/EventCalendar";

export const deleteCalendarEvent = (req, res) => {
  res.type("application/json");

  const date = req.body.date;
  const title = req.body.title;

  try {
    //const event = EventCalendar().deleteEvent(date, title);

    res.status(200).json({
      value: {
        date: "23-2-2022",
        title: "test",
        description: "test description",
      },
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};
