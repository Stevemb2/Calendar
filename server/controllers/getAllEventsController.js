export const getAllEventsController = (eventModel) => {
  return async (req, res) => {
    res.type("application/json");

    try {
      const events = await eventModel.find({}).exec();

      console.debug(`server: events: ${JSON.stringify(events, null, 3)}`);

      res.status(200).json({
        value: events,
      });
    } catch (err) {
      res.status(500).json({ err });
    }
  };
};
