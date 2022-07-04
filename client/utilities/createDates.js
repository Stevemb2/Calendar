import uuid from "react-uuid";
import { getFirstDayOfWeekInMonth } from "./getFirstDayOfWeekInMonth";
import { getMaxDayOfMonth } from "./getMaxDayOfMonth";

export const createDates = (date) => {
  const { dayOfWeek, day, month, year } = date;

  let dates = [];

  const firstDayOfWeekMonth = getFirstDayOfWeekInMonth(dayOfWeek, day);

  let dayCount = 0;

  // Loop over previous month dates
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const maxDayOfPrevMonth = getMaxDayOfMonth(prevMonth, year);
  let numberOfPrevMonthDay = 0; // will need this for the next month days

  for (let i = 0; i < firstDayOfWeekMonth; i++) {
    if (dayCount === 7) {
      dayCount = 0;
    }

    const date = {
      id: uuid(),
      day: maxDayOfPrevMonth - firstDayOfWeekMonth + 1 + i,
      dayOfWeek: dayCount,
      month: prevMonth,
      year: prevYear,
      isFirstWeek: true,
      isCurrentMonth: false,
    };

    dates.push(date);

    dayCount += 1;
    numberOfPrevMonthDay += 1;
  }

  // Loop over current month dates
  const maxDayOfMonth = getMaxDayOfMonth(month, year);

  for (let j = 0; j < maxDayOfMonth; j++) {
    if (dayCount === 7) {
      dayCount = 0;
    }

    const date = {
      id: uuid(),
      day: j + 1,
      dayOfWeek: dayCount,
      month: month,
      year: year,
      isFirstWeek: firstDayOfWeekMonth + j < 7 ? true : false,
      isCurrentMonth: true,
    };

    dates.push(date);

    dayCount += 1;
  }

  // Loop over next month dates
  const nextMonth = month === 11 ? 1 : month + 1;
  const nextYear = month == 11 ? year + 1 : year;
  const remainingDaysInMonth = 42 - maxDayOfMonth - numberOfPrevMonthDay;

  for (let k = 0; k < remainingDaysInMonth; k++) {
    if (dayCount === 7) {
      dayCount = 0;
    }

    const date = {
      id: uuid(),
      day: k + 1,
      dayOfWeek: dayCount,
      month: nextMonth,
      year: nextYear,
      isFirstWeek: false,
      isCurrentMonth: false,
    };

    dates.push(date);

    dayCount += 1;
  }

  return dates;
};
