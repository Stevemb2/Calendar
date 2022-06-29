import mongoose from "mongoose";

export const EventCalendar = () => {
  const HOSTNAME = "localhost";
  const MONGO_PORT = 27017;

  mongoose.connect(`mongodb://${HOSTNAME}:${MONGO_PORT}/calendar`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const Schema = mongoose.Schema;

  const calendarSchema = new Schema({
    date: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
  });

  const calendarModel = mongoose.model("calendar", calendarSchema);

  const getEvents = () => {
    calendarModel.find();
  };

  const postEvent = () => {
    calendarModel.create();
  };

  const putEvent = () => {
    calendarModel.updateOne();
  };

  const deleteEvent = () => {
    calendarModel.deleteOne();
  };

  return Object.freeze({
    getEvents,
    postEvent,
    putEvent,
    deleteEvent,
  });
};
