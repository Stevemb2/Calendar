export const deleteEventController = (calendarModel) => {
  return async (req, res) => {
    const date = req.body.date;
    const title = req.body.title;
    const description = req.body.description;

    console.log(
      `Deleting event: date: ${date}, title: ${title}, description: ${description} from database`
    );

    try {
      const { deletedCount } = await calendarModel.deleteOne({
        date,
        title,
        description,
      });

      console.error(`Delete: deletedCount: ${deletedCount}`);

      res.status(200).json({
        value: deletedCount,
      });
    } catch (err) {
      console.error(`Delete: ${JSON.stringify(err, null, 3)}`);

      res.status(500).json({ err });
    }
  };
};
