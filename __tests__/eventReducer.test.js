import { expect, test } from "@jest/globals";
import { events } from "../client/reducers/events";
import { getEventsAction } from "../client/actions/getEventsAction";
import { createEventsAction } from "../client/actions/createEventsAction";
import { createEventAction } from "../client/actions/createEventAction";
import { updateEventAction } from "../client/actions/updateEventAction";
import { deleteEventAction } from "../client/actions/deleteEventAction";

test("Get all events", () => {
  let state = [
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
    {
      date: "2-20-1962",
      title: "birthday",
      description: "celebrate",
    },
  ];

  let action = getEventsAction();

  let newState = events(state, action);

  expect(newState).toEqual(state);
});

test("Create event", () => {
  const state = [
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
    {
      date: "2-20-1962",
      title: "birthday",
      description: "celebrate",
    },
  ];

  const action = createEventAction({
    date: "3-4-2022",
    title: "Another Date",
    description: "blah!",
  });

  let newState = events(state, action);

  expect(newState).toEqual([
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
    {
      date: "2-20-1962",
      title: "birthday",
      description: "celebrate",
    },
    {
      date: "3-4-2022",
      title: "Another Date",
      description: "blah!",
    },
  ]);
});

// sburns fix!
test("Update event", () => {
  const state = [
    {
      date: "12-6-2022",
      title: "Dentist Appointment",
      description: "Very painful tooth extraction",
    },
    {
      date: "13-7-2022",
      title: "Doctors Appointment",
      description: "Routine checkup",
    },
  ];

  const action = updateEventAction({
    date: "12-6-2022",
    title: "Dentist Appointment",
    description: "?Very painful tooth extraction",
  });

  const newState = events(state, action);

  expect(newState).toEqual([
    {
      date: "13-7-2022",
      title: "Doctors Appointment",
      description: "Routine checkup",
    },
    {
      date: "12-6-2022",
      title: "Dentist Appointment",
      description: "?Very painful tooth extraction",
    },
  ]);
});

test("Delete event", () => {
  const state = [
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
    {
      date: "2-20-1962",
      title: "birthday",
      description: "celebrate",
    },
  ];

  const action = deleteEventAction({
    date: "2-20-1962",
    title: "birthday",
  });

  const newState = events(state, action);

  expect(newState).toEqual([
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
  ]);
});

test("Create events", () => {
  const state = [];

  const action = createEventsAction([
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
    {
      date: "2-20-1962",
      title: "birthday",
      description: "celebrate",
    },
  ]);

  const newState = events(state, action);

  expect(newState).toEqual([
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
    {
      date: "2-20-1962",
      title: "birthday",
      description: "celebrate",
    },
  ]);
});
