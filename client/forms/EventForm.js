import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEventThunk } from "../actions/updateEventThunk";
import { deleteEventThunk } from "../actions/deleteEventThunk";
import { formatDate } from "../utilities/formatDate";

export const EventForm = ({ event, isDisplayed, setIsDisplayed }) => {
  const dispatch = useDispatch();

  const { date, title } = event;

  const [description, setDescription] = useState(event.description);

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleUpdate = () => {
    if (title === "") return;

    dispatch(
      updateEventThunk({
        date,
        title,
        description,
      })
    );

    setIsDisplayed(false);
  };

  const handleDelete = () => {
    if (title === "") return;

    dispatch(
      deleteEventThunk({
        date,
        title,
        description,
      })
    );

    setIsDisplayed(false);
  };

  const handleClose = () => {
    setDescription("");
    setIsDisplayed(false);
  };

  const formattedDate = formatDate(event.date);

  const eventFormStyle = isDisplayed
    ? "event-form diplayed"
    : "event-form hidden";

  return (
    <div className={eventFormStyle}>
      <div className="input">
        <span className="form-title">Event</span>
      </div>
      <div className="input">
        <span>{formattedDate}</span>
      </div>
      <div className="input">
        <span>{event.title}</span>
      </div>
      <div className="input" data-testid="description">
        <textarea
          rows="3"
          placeholder="description"
          type="text"
          value={description}
          onChange={handleDescription}
          onBlur={handleDescription}
        />
      </div>
      <div className="input">
        <span>
          <button className="button" type="submit" onClick={handleUpdate}>
            Update
          </button>
        </span>
        <span>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </span>
        <span>
          <button className="button" onClick={handleClose}>
            Close
          </button>
        </span>
      </div>
    </div>
  );
};
