import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate } from "../utilities/formatDate";
import { createEventThunk } from "../actions/createEventThunk";

export const NewEventForm = ({ date, isDisplayed, setIsDisplayed }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const clearTitle = () => {
    setTitle("");
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const clearDescription = () => {
    setDescription("");
  };

  const handleCreate = () => {
    if (title === "") return;

    dispatch(
      createEventThunk({
        date,
        title,
        description,
      })
    );

    setTitle("");
    setDescription("");
    setIsDisplayed(false);
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setIsDisplayed(false);
  };

  const newEventFormStyle = isDisplayed
    ? "new-event-form diplayed"
    : "new-event-form hidden";

  const formattedDate = formatDate(date);

  return (
    <div className={newEventFormStyle}>
      <div className="input">
        <span className="form-title">New Event</span>
      </div>
      <div className="input">
        <span>{formattedDate}</span>
      </div>
      <div className="input">
        <input
          placeholder="title"
          type="text"
          value={title}
          onChange={handleTitle}
          onBlur={handleTitle}
          onClick={clearTitle}
        />
      </div>
      <div className="input">
        <textarea
          rows="3"
          placeholder="description"
          type="text"
          value={description}
          onChange={handleDescription}
          onBlur={handleDescription}
          onClick={clearDescription}
        />
      </div>
      <div className="input">
        <span>
          <button className="button" onClick={handleCreate}>
            Add
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
