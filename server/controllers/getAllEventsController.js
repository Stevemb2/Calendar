export const getAllEventsController = (eventRouter, calendarModel) => {
  eventRouter.get("/event", async (req, res) => {
    res.type("application/json");

    try {
      const events = async () => {
        return await calendarModel.find({}).exec();
      };

      res.status(200).json({
        // value: [
        //   {
        //     date: "23-6-2022",
        //     title: "test",
        //     description: "test description",
        //   },
        // ],
        value: events,
      });
    } catch (err) {
      res.status(500).json({ err });
    }
  });
};
