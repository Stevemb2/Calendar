export const updateEventController = (calendarModel) => {
  return async (req, res) => {
    const date = req.body.date;
    const title = req.body.title;
    const description = req.body.description;

    const event = { date, title, description };

    console.log(
      `Updating event: date: ${date}, title: ${title}, description: ${description} in database`
    );

    try {
      const { acknowledged } = await calendarModel
        .where({ date, title })
        .updateOne(event);

      res.status(200).json({
        value: acknowledged,
      });
    } catch (err) {
      res.status(500).json({ err });
    }
  };
};
