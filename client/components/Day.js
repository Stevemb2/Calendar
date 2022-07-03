import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getDayOfWeekText } from "../utilities/getDayOfWeekText";
import { EventForm } from "../Forms/EventForm";
import { EventElement } from "./EventElement";
import "../styles/calendar.css";

export const Day = ({ date }) => {
  const eventItems = useSelector((state) => state.events);

  const [isDisplayed, setIsDisplayed] = useState(false);

  const { dayOfWeek, isFirstWeek } = date;

  const displayFormHandler = (event) => {
    event.stopPropagation();

    if (event.detail === 2) {
      // Handle double clicks
      setIsDisplayed(true);
    }
  };

  const now = new Date();

  const todaysDate = {
    day: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  };

  let dayStyle = date.isCurrentMonth ? "day" : "other-day";

  if (
    todaysDate.day === date.day &&
    todaysDate.month === date.month &&
    todaysDate.year === date.year
  ) {
    dayStyle = "today";
  }

  let position = -30;

  const eventItemDate = `${date.day}-${date.month}-${date.year}`;

  return (
    <div
      className="grid-item"
      onClick={displayFormHandler}
      onContextMenu={displayFormHandler}
    >
      {isFirstWeek ? <div>{getDayOfWeekText(dayOfWeek)}</div> : null}
      <div>
        <span className={dayStyle}>{date.day}</span>
      </div>
      {eventItems.map((eventItem) => {
        return eventItem.date === eventItemDate ? (
          <EventElement
            key={`${eventItemDate}-${eventItem.title}`}
            eventItem={eventItem}
            position={(position += 30)}
          />
        ) : null;
      })}
      <EventForm
        date={eventItemDate}
        isDisplayed={isDisplayed}
        setIsDisplayed={setIsDisplayed}
      />
    </div>
  );
};
