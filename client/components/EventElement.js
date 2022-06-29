import { useState } from "react";
import { EventItemForm } from "../Forms/EventItemForm";

export const EventElement = ({ eventItem, position }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const eventElementClickHandler = (event) => {
    event.stopPropagation();

    if (event.detail === 2) {
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
        {eventItem.title}
      </div>
      {isDisplayed ? (
        <EventItemForm
          eventItem={eventItem}
          isDisplayed={isDisplayed}
          setIsDisplayed={setIsDisplayed}
        />
      ) : null}
    </div>
  );
};
