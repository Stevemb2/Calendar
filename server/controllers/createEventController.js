export const createEventController = (calendarModel) => {
  return async (req, res) => {
    const date = req.body.date;
    const title = req.body.title;
    const description = req.body.description;

    const event = { date, title, description };

    console.log(`Creating event: date: ${date}, title: ${title} in database`);

    try {
      const newEvent = await calendarModel.create(event);

      res.status(200).json({
        value: newEvent,
      });
    } catch (err) {
      res.status(500).json({ err });
    }
  };
};
