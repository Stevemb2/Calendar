import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getDayOfWeekText } from "../utilities/getDayOfWeekText";
import { NewEventForm } from "../Forms/NewEventForm";
import { EventElement } from "./EventElement";
import "../styles/calendar.css";

export const Day = ({ date }) => {
  const events = useSelector((state) => state.events);

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

  const eventDate = `${date.day}-${date.month}-${date.year}`;

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
      {events.map((event) => {
        return event.date === eventDate ? (
          <EventElement
            key={`${eventDate}-${event.title}`}
            event={event}
            position={(position += 30)}
          />
        ) : null;
      })}
      <NewEventForm
        date={eventDate}
        isDisplayed={isDisplayed}
        setIsDisplayed={setIsDisplayed}
      />
    </div>
  );
};
