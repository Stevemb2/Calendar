/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { EventForm } from "../client/Forms/EventForm";

test("Displays event form description", () => {
  const event = {
    date: "5-6-2022",
    title: "Test",
    description: "Test Description",
  };

  const isDisplayed = true;

  const setIsDisplayed = () => {};

  const eventForm = render(
    <EventForm
      event={event}
      isDisplayed={isDisplayed}
      setIsDisplayed={setIsDisplayed}
    ></EventForm>
  );

  const description = await render.findByTestId("description");

  expect(description.toBe("Test Description"));
});
