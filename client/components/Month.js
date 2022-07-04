import React from "react";
import { useSelector } from "react-redux";
import { Day } from "./Day";
import { createDates } from "../utilities/createDates";
import "../styles/calendar.css";

export const Month = () => {
  const date = useSelector((state) => state.date);

  const dates = createDates(date);

  return (
    <div className="grid-container">
      {dates.map((date) => {
        return (
          <Day key={`${date.day}-${date.month}-${date.year}`} date={date} />
        );
      })}
    </div>
  );
};
