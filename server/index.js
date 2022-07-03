import express from "express";
import { fileURLToPath } from "url";
import http from "http";
import path from "path";
import bodyParser from "body-parser";
import os from "os";
import mongoose from "mongoose";

// Controllers
import { getAllEventsController } from "./controllers/getAllEventsController.js";
import { createEventController } from "./controllers/createEventController.js";
import { updateEventController } from "./controllers/updateEventController.js";
import { deleteEventController } from "./controllers/deleteEventController.js";

const app = express();

const configuration = {
  port: 3000,
  mongoPort: 27017,
  hostname: "localhost",
  platform: os.platform(),
};

// MongoDB

mongoose.connect(
  `mongodb://${configuration.hostname}:${configuration.mongoPort}/calendar`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.set("port", configuration.port);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // to support URL-encoded bodies

// Routers

const eventRouter = express.Router();

app.use(eventRouter);

http.createServer(app).listen(configuration.port, () => {
  console.log(
    `Express started on http://${configuration.hostname}:${configuration.port} on ${configuration.platform} platform; press Ctrl-C to terminate.`
  );
});

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
});

const eventModel = mongoose.model("event", eventSchema);

eventRouter.get("/event", getAllEventsController(eventModel));
eventRouter.post("/event", createEventController(eventModel));
eventRouter.put("/event", updateEventController(eventModel));
eventRouter.delete("/event", deleteEventController(eventModel));
