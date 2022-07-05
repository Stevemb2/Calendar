import React from "react";
import { Calendar } from "./Calendar";
import ErrorBoundary from "./ErrorBoundary";

export const Home = () => {
  return (
    <ErrorBoundary>
      <Calendar />
    </ErrorBoundary>
  );
};
