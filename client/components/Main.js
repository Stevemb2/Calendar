import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

import { Provider } from "react-redux";
import { store } from "../store";
import { Calendar } from "./Calendar";
import { ErrorPage } from "./ErrorPage";
import ErrorBoundary from "./ErrorBoundary";

export const Main = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Calendar />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};
