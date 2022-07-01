import eventReducer from "./eventReducer";

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

let newState = eventReducer(state, {
  type: "GET_EVENTS",
});

test("Get all events", () => {
  expect(newState.toEqual(state));
});

newState = eventReducer(state, {
  type: "POST_EVENT",
  payload: {
    date: "3-4-2022",
    title: "Another Date",
    description: "blah!",
  },
});

test("Post event", () => {
  expect(
    newState.toEqual([
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
      },
    ])
  );
});

newState = eventReducer(state, {
  type: "PUT_EVENT",
  payload: {
    date: "2-20-1962",
    title: "birthday",
    description: "blah",
  },
});

test("Put event", () => {
  expect(
    newState.toEqual([
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
    ])
  );
});

newState = eventReducer(state, {
  type: "DELETE_EVENT",
  payload: {
    date: "2-20-1962",
    title: "birthday",
  },
});

test("Delete event", () => {
  expect(
    newState.toEqual([
      {
        date: "1-20-2022",
        title: "test",
        description: "testing",
      },
    ])
  );
});

console.log(`\nstate: DELETE_EVENT: ${JSON.stringify(newState, null, 3)}`);

state = [];

newState = eventReducer(state, {
  type: "POST_EVENTS",
  payload: [
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
  ],
});

test("Post events", () => {
  expect(
    newState.toEqual([
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
    ])
  );
});
