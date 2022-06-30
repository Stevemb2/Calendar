import { EventCalendar } from "../database/EventCalendar";

export const getAllCalendarEvents = (req, res) => {
  res.type("application/json");

  try {
    //const events = EventCalendar().getEvents();

    res.status(200).json({
      value: [
        {
          date: "23-6-2022",
          title: "test",
          description: "test description",
        },
      ],
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};
