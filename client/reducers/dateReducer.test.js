import dateReducer from "./dateReducer";

let state = {
  date: "1-20-2022",
  title: "test",
  description: "testing",
};

let newState = dateReducer(state);

test("Get all events", () => {
  expect(
    newState.toEqual({
      date: "1-20-2022",
      title: "test",
      description: "testing",
    })
  );
});
