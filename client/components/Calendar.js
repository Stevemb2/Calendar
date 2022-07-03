import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setDateAction } from "../actions/setDateAction";
import { Header } from "./Header";
import { Month } from "./Month";
import { getTodaysDate } from "../utilities/getTodaysDate";

export const Calendar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCalendarEvents = async () => {
      const todaysDate = getTodaysDate();

      dispatch(setDateAction(todaysDate));

      const options = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        url: "event",
      };

      const { data } = await axios(options);

      console.log(`Calendar: event items: ${JSON.stringify(data, null, 3)}`);

      //if (data && data.length > 0) dispatch(setDateAction(data));
    };

    getCalendarEvents();
  }, []);

  return (
    <div>
      <Header />
      <Month />
    </div>
  );
};
