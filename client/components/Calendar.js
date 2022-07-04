import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setDateAction } from "../actions/setDateAction";
import { createEventsAction } from "../actions/createEventsAction";
import { Header } from "./Header";
import { Month } from "./Month";
import { getTodaysDate } from "../utilities/getTodaysDate";

export const Calendar = () => {
  //const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const todaysDate = getTodaysDate();

  //console.log(`todays date: ${JSON.stringify(todaysDate, null, 3)}`);

  dispatch(setDateAction(todaysDate)); // fix!!!

  useEffect(() => {
    (async () => {
      const options = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        url: "event",
      };

      const { data } = await axios(options);

      if (!data) return;

      const events = data.value;

      console.log(`Calendar: events: ${JSON.stringify(events, null, 3)}`);

      if (events && events.length > 0) dispatch(createEventsAction(events));
    })();
  }, []);

  return (
    <div>
      <Header />
      <Month />
    </div>
  );
};
