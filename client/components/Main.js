import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

import { Provider } from "react-redux";
import { store } from "../store";
import { Home } from "./Home";
import { ErrorPage } from "./ErrorPage";

export const Main = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};
