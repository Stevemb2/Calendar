export const updateEventController = (eventRouter, calendarModel) => {
  eventRouter.get("/event", async (req, res) => {
    const date = req.body.date;
    const title = req.body.title;
    const description = req.body.description;

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
  });
};
