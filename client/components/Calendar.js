import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setDateAction } from "../actions/setDateAction";
import { createEventsAction } from "../actions/createEventsAction";
import { Header } from "./Header";
import { Month } from "./Month";
import { getFirstDayOfCurrentMonth } from "../utilities/getFirstDayOfCurrentMonth";

export const Calendar = () => {
  const dispatch = useDispatch();

  const firstDayOfCurrentMonth = getFirstDayOfCurrentMonth();

  dispatch(setDateAction(firstDayOfCurrentMonth));

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

      console.log(
        `Calendar: events from database: ${JSON.stringify(events, null, 3)}`
      );

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
