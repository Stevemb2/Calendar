import { getMonthText } from "./getMonthText";

export const formatDate = (date) => {
    if (date && typeof date === "string") {
        const [day, month, year] = date.split("-");
        return `${getMonthText(month)} ${day}, ${year}`;
    } else {
        return "";
    }
}