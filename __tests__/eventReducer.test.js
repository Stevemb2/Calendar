import { expect, test } from "@jest/globals";
import { eventReducer } from "../client/reducers/eventReducer";
import { deleteEventAction } from "../client/actions/deleteEventAction";
import { getEventsAction } from "../client/actions/getEventsAction";
import { postEventAction } from "../client/actions/postEventAction";
import { postEventsAction } from "../client/actions/postEventsAction";
import { putEventAction } from "../client/actions/putEventAction";

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

  let newState = eventReducer(state, action);

  expect(newState).toEqual(state);
});

test("Post event", () => {
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

  const action = postEventAction({
    date: "3-4-2022",
    title: "Another Date",
    description: "blah!",
  });

  let newState = eventReducer(state, action);

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

test("Put event", () => {
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

  const action = putEventAction({
    date: "2-20-1962",
    title: "birthday",
    description: "blah",
  });

  const newState = eventReducer(state, action);

  expect(newState).toEqual([
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
    {
      date: "2-20-1962",
      title: "birthday",
      description: "blah",
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

  const newState = eventReducer(state, action);

  expect(newState).toEqual([
    {
      date: "1-20-2022",
      title: "test",
      description: "testing",
    },
  ]);
});

test("Post events", () => {
  const state = [];

  const action = postEventsAction([
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

  const newState = eventReducer(state, action);

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
