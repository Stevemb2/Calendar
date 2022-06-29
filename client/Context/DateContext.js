import { createContext } from "react";

const dateHook = [
  {
    day: 1,
    dayOfWeek: 0,
    month: 0,
    year: 2022,
    title: "",
    description: "",
},
  () => {}
];

const DateContext = createContext(dateHook);

export default DateContext;