export const getFirstDayOfWeekInMonth = (dayOfWeek, day) => {
    const DAYS_IN_WEEK = 7;

    let remainder;

    if (day > DAYS_IN_WEEK) {
        remainder = day % DAYS_IN_WEEK;
        return (DAYS_IN_WEEK - (remainder - dayOfWeek - 1));
    } else {
        return (dayOfWeek - day + 1);
    }
}
