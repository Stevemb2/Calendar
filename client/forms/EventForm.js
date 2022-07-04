import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAxios } from "../hooks/useAxios";
import { formatDate } from "../utilities/formatDate";

export const EventForm = ({ event, isDisplayed, setIsDisplayed }) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState(event.description);

  const [updatedEvent, setUpdatedEvent] = useState({
    date: "",
    title: "",
    description: "",
  });

  const [method, setMethod] = useState("");

  // STEVE this is not working when we call setEvents!
  useAxios(updatedEvent, method);

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE_EVENT",
      payload: {
        date: event.date,
        title: event.title,
        description,
      },
    });

    setUpdatedEvent({
      date: event.date,
      title: event.title,
      description,
    });

    setMethod("PUT");
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EVENT",
      payload: {
        date: event.date,
        title: event.title,
        description: "",
      },
    });

    setUpdatedEvent({
      date: event.date,
      title: event.title,
      description,
    });

    setMethod("DELETE");
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
        <span>Event</span>
      </div>
      <div className="input">
        <span>{formattedDate}</span>
      </div>
      <div className="input">
        <span>{event.title}</span>
      </div>
      <div className="input">
        <input
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
