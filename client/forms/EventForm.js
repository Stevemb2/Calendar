import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAxios } from "../hooks/useAxios";
import { formatDate } from "../utilities/formatDate";

export const EventForm = ({ date, isDisplayed, setIsDisplayed }) => {
  const eventItems = useSelector((state) => state.eventItems);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(updatedEventItem.title);
  const [description, setDescription] = useState(updatedEventItem.description);

  useAxios(initialEventItem, updatedEventItem, method);

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
    dispatch({
      type: "POST",
      payload: {
        date,
        title,
        description,
      },
    });

    setEventItems([
      ...eventItems,
      { date, title, description, method: "POST" },
    ]);

    setIsDisplayed(false);
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setIsDisplayed(false);
  };

  const eventFormStyle = isDisplayed
    ? "event-form diplayed"
    : "event-form hidden";

  const formattedDate = formatDate(date);

  return (
    <div className={eventFormStyle}>
      <div className="input">
        <h6>New Event</h6>
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
        <input
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
