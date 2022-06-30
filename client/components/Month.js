import { useSelector } from "react-redux";
import { Day } from "./Day";
import { createDateArray } from "../utilities/createDateArray";

export const Month = () => {
  const date = useSelector((state) => state.date);

  const dateArray = createDateArray(date);

  return (
    <div>
      <div className="grid-container">
        {dateArray.map((date) => (
          <Day key={`${date.day}-${date.month}-${date.year}`} date={date} />
        ))}
      </div>
    </div>
  );
};
