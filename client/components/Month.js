import React from "react";
import { useSelector } from "react-redux";
import { Day } from "./Day";
import { createDateArray } from "../utilities/createDateArray";
import "../styles/calendar.css";

export const Month = () => {
  const date = useSelector((state) => state.date);

  const dateArray = createDateArray(date);

  return (
    <div className="grid-container">
      {dateArray.map((date) => {
        return (
          <Day key={`${date.day}-${date.month}-${date.year}`} date={date} />
        );
      })}
    </div>
  );
};
