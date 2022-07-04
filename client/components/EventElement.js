import React from "react";
import { useState } from "react";
import { EventForm } from "../Forms/EventForm";
import "../styles/calendar.css";

export const EventElement = ({ event, position }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const eventElementClickHandler = (e) => {
    e.stopPropagation();

    if (e.detail === 2) {
      console.log(`STEVE WE ARE HERE`);
      // Handle double clicks
      setIsDisplayed(!isDisplayed);
    }
  };

  return (
    <div>
      <div
        className="event-element"
        style={{ marginTop: position }}
        onClick={eventElementClickHandler}
      >
        {event.title}
      </div>
      {isDisplayed ? (
        <EventForm
          event={event}
          isDisplayed={isDisplayed}
          setIsDisplayed={setIsDisplayed}
        />
      ) : null}
    </div>
  );
};
