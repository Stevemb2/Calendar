import { useContext } from "react";
import DateContext from '../Context/DateContext';
import { Day } from './Day';
import { createDateArray } from '../utilities/createDateArray';

export const Month = () => {
    const [date] = useContext(DateContext);
    const dateArray = createDateArray(date);

    return (
        <div>
            <div className="grid-container">
                {dateArray.map((date) => (
                    <Day key={`${date.day}-${date.month}-${date.year}`} date={date}/>
                ))}
            </div>
        </div>
     );
}