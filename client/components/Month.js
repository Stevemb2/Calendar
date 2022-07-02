import React from "react";
import { useSelector } from "react-redux";
import { Day } from "./Day";
import { Dayp } from "./Dayp";
import { createDateArray } from "../utilities/createDateArray";
import "../styles/calendar.css";

export const Month = () => {
  const datep = useSelector((state) => state.date);
  console.log(`datep: ${JSON.stringify(datep, null, 3)}`);

  const date = { day: 1, month: 6, year: 2022 };

  const dateArray = createDateArray(date);

  // return (
  //   <div className="grid-container">
  //     {dateArray.map((date) => {
  //       return <div>{`${date.day}-${date.month}-${date.year}`}</div>;
  //     })}
  //   </div>
  // );
  return (
    <div>
      <div className="grid-container">
        {dateArray.map((date) => {
          return (
            <Dayp key={`${date.day}-${date.month}-${date.year}`} date={date} />
          );
        })}
      </div>
    </div>
  );
};

/*
            <Day key={`${date.day}-${date.month}-${date.year}`} date={date} />
            <Dayp key={`${date.day}-${date.month}-${date.year}`} date={date} />
*/
