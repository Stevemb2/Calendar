export const deleteEventController = (calendarModel) => {
  return async (req, res) => {
    const date = req.body.date;
    const title = req.body.title;

    console.log(`Deleting event: ${date}, ${title} from database`);

    try {
      const {
        deletedCount,
      } = async (event) => {
        return await calendarModel.deleteOne({
          date: event.date,
          title: event.title,
        });
      };

      res.status(200).json({
        value: deletedCount,
      });
    } catch (err) {
      res.status(500).json({ err });
    }
  };
};
