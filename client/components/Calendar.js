import { useState, useEffect, StrictMode } from "react";
import DateContext from "../Context/DateContext";
import EventContext from "../Context/EventContext";
import { Header } from "./Header";
import { Month } from "./Month";
import { getTodaysDate } from "../utilities/getTodaysDate";
import { getAllCalendarEvents } from "../services/getAllCalendarEvents";

export const Calendar = () => {
  const todaysDate = getTodaysDate();
  const dateHook = useState(todaysDate);
  const eventItemsHook = useState([]);

  useEffect(
    (async () => {
      console.log("Getting all event items from database");

      const data = await getAllCalendarEvents();

      setEventItems(data);
    })(),
    []
  );

  return (
    <StrictMode>
      <EventContext.Provider value={eventItemsHook}>
        <DateContext.Provider value={dateHook}>
          <div>
            <Header />
            <Month />
          </div>
        </DateContext.Provider>
      </EventContext.Provider>
    </StrictMode>
  );
};
