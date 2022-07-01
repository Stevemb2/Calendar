import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDateAction } from "../actions/setDateAction.js";
import { getMonthText } from "../utilities/getMonthText.js";
import { getTodaysDate } from "../utilities/getTodaysDate.js";
import "../styles/calendar.css";

export const Header = () => {
  const dispatch = useDispatch();
  //const date = useSelector((state) => state.date);
  const date = {
    day: 3,
    month: 6,
    year: 2022,
  };

  const setTodayHandler = () => {
    const todaysDate = getTodaysDate();
    dispatch(setDateAction(todaysDate));
  };

  const previousMonthHandler = () => {
    const month = date.month === 0 ? 11 : date.month - 1;
    const year = date.month === 0 ? date.year - 1 : date.year;

    const newDate = new Date(year, month, 1);

    dispatch(
      setDateAction({
        day: newDate.getDate(),
        dayOfWeek: newDate.getDay(),
        month: newDate.getMonth(),
        year: newDate.getFullYear(),
      })
    );
  };

  const nextMonthHandler = () => {
    const month = date.month === 11 ? 1 : date.month + 1;
    const year = date.month === 11 ? date.year + 1 : date.year;

    const newDate = new Date(year, month, 1);

    dispatch(
      setDateAction({
        day: newDate.getDate(),
        dayOfWeek: newDate.getDay(),
        month: newDate.getMonth(),
        year: newDate.getFullYear(),
      })
    );
  };

  const monthText = getMonthText(date.month);

  return (
    <div className="header">
      <button className="button" onClick={setTodayHandler}>
        Today
      </button>
      <button className="arrow" onClick={previousMonthHandler}>
        &lt;
      </button>
      <button className="arrow" onClick={nextMonthHandler}>
        &gt;
      </button>
      <span className="date">
        {monthText} {date.year}
      </span>
    </div>
  );
};
