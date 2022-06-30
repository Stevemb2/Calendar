import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDate } from "../actions/setDate";
import { Header } from "./Header";
import { Month } from "./Month";
import { getTodaysDate } from "../utilities/getTodaysDate";
import { getAllCalendarEvents } from "../services/getAllCalendarEvents";

export const Calendar = () => {
  const dispatch = useDispatch();

  useEffect(
    (async () => {
      const todaysDate = getTodaysDate();
      dispatch(setDate(todaysDate));

      const data = await getAllCalendarEvents();
      console.log(`Calendar: event items: ${JSON.stringify(data, null, 3)}`);

      if (data && data.length > 0) dispatch(postEvents(data));
    })(),
    []
  );

  return (
    <div>
      <Header />
      <Month />
    </div>
  );
};
