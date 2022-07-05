export const getFirstDayOfCurrentMonth = () => {
  const today = new Date();

  const currentDay = today.getDate();
  const currentDayOfWeek = today.getDay();

  let firstDayOfCurrentMonth = currentDayOfWeek - currentDay;

  if (firstDayOfCurrentMonth < 0) {
    firstDayOfCurrentMonth += 8;
  }

  const day = 1;
  const dayOfWeek = firstDayOfCurrentMonth;
  const month = today.getMonth();
  const year = today.getFullYear();

  return {
    day,
    dayOfWeek,
    month,
    year,
  };
};
