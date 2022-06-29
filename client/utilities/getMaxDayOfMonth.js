import { isLeapYear } from "./isLeapYear";

export const getMaxDayOfMonth = (month, year) => {
    if (month === 1) {
        return isLeapYear(year) ? 29 : 28;
    } else if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        return 31;
    } else {
        return 30;
    }
}
