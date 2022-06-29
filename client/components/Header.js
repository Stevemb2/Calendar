import DateContext from "../Context/DateContext";
import { useContext } from "react";
import { getMonthText } from '../utilities/getMonthText';
import { getTodaysDate } from '../utilities/getTodaysDate';

export const Header = () => {
    const [date, setDate] = useContext(DateContext);

    const setTodayHandler = () => {
        const todaysDate = getTodaysDate();
        setDate(todaysDate);
    }

    const previousMonthHandler = () => {
        const month = date.month === 0 ? 11 : date.month - 1;
        const year = date.month === 0 ? date.year - 1 : date.year;

        const newDate = new Date(year, month, 1);

        setDate({
            day: newDate.getDate(),
            dayOfWeek: newDate.getDay(),
            month: newDate.getMonth(),
            year: newDate.getFullYear(),
        });
    }

    const nextMonthHandler = () => {
        const month = date.month === 11 ? 1 : date.month + 1;
        const year = date.month === 11 ? date.year + 1 : date.year;

        const newDate = new Date(year, month, 1);

        setDate({
            day: newDate.getDate(),
            dayOfWeek: newDate.getDay(),
            month: newDate.getMonth(),
            year: newDate.getFullYear(),
        });
   }

    const monthText = getMonthText(date.month);

    return (
        <div className="header">
            <button className="button" onClick={setTodayHandler}>Today</button>
            <button className="arrow" onClick={previousMonthHandler}>&lt;</button>
            <button className="arrow" onClick={nextMonthHandler}>&gt;</button>
            <span className="date">{monthText} {date.year}</span>
        </div>
    );
}