import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAxios } from "../hooks/useFetch";
import { formatDate } from "../utilities/formatDate";

export const EventItemForm = ({ eventItem, isDisplayed, setIsDisplayed }) => {
  const eventItems = useSelector((state) => state.eventItems);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(eventItem.title);
  const [description, setDescription] = useState(eventItem.description);
  const [newEventItems, setNewEventItems] = useState([]);

  // STEVE this is not working when we call setEventItems!
  useAxios(eventItem, updatedEventItem);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleUpdate = () => {
    dispatch({
      type: "PUT",
      payload: {
        date: eventItem.date,
        title,
        description,
      },
    });

    let updatedEventItems = eventItems.filter((item) => {
      return item.date !== updatedEventItem.date;
    });

    updatedEventItems = [
      ...updatedEventItems,
      { date: eventItem.date, title, description },
    ];

    setNewEventItems(updatedEventItems);
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: {
        date: eventItem.date,
        title: "",
        description: "",
      },
    });

    const filteredEventItems = eventItems.filter((item) => {
      return item.date !== updatedEventItem.date;
    });

    setNewEventItems(filteredEventItems);
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setIsDisplayed(false);
    setEventItems(newEventItems);
  };

  const formattedDate = formatDate(eventItem.date);

  const eventItemFormStyle = isDisplayed
    ? "event-item-form diplayed"
    : "event-item-form hidden";

  return (
    <div className={eventItemFormStyle}>
      <div className="input">
        <h6>Event</h6>
      </div>
      <div className="input">
        <span>{formattedDate}</span>
      </div>
      <div className="input">
        <span>Title: </span>
      </div>
      <div className="input">
        <input
          placeholder="title"
          type="text"
          value={title}
          onChange={handleTitle}
          onBlur={handleTitle}
        />
      </div>
      <div className="input">Description:</div>
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
