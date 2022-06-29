import bodyParser from "body-parser";
import express from "express";
import http from "http";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { CalendarController } from "./controllers/CalendarController";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Configuration = {
  port: 3000,
  mongoPort: 27017,
  hostname: "localhost",
  platform: os.platform(),
};

const app = express();

app.set("port", Configuration.port);

//app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // to support URL-encoded bodies

http.createServer(app).listen(Configuration.port, () => {
  console.log(
    `Express started on http://${Configuration.hostname}:${Configuration.port} on ${Configuration.platform} platform; press Ctrl-C to terminate.`
  );
});

const calendarRouter = express.Router();

app.use(calendarRouter);

const calendarController = CalendarController();

calendarRouter.get("/event", calendarController.getAllCalendarEvents());
calendarRouter.post("/event", calendarController.createCalendarEvent());
calendarRouter.put("/event", calendarController.putCalendarEvent());
calendarRouter.delete("/event", calendarController.deleteCalendarEvent());
