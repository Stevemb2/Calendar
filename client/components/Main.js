import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Calendar } from "./Calendar";

export const Main = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Calendar />
      </Provider>
    </StrictMode>
  );
};
