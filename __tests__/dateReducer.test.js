import { expect, test } from "@jest/globals";
import { dates } from "../client/reducers/date";
import { setDateAction } from "../client/actions/setDateAction";

test("Set date", () => {
  let state = {};

  const action = setDateAction({
    date: "1-20-2022",
    title: "test",
    description: "testing",
  });

  let newState = dates(state, action);

  expect(newState).toEqual({
    date: "1-20-2022",
    title: "test",
    description: "testing",
  });
});
