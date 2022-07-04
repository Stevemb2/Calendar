export const updateEventController = (calendarModel) => {
  return async (req, res) => {
    const date = req.body.date;
    const title = req.body.title;
    const description = req.body.description;

    console.log(`Updating event: ${date}, ${title} in database`);

    try {
      const {
        acknowledged,
      } = async (event) => {
        return await calendarModel
          .where({ date: event.date, title: event.title })
          .updateOne(event);
      };

      res.status(200).json({
        value: acknowledged,
      });
    } catch (err) {
      res.status(500).json({ err });
    }
  };
};
