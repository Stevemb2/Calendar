import { createEventAction } from "./createEventAction";
import { getDatabaseServicePromise } from "../services/getDatabaseServicePromise";

export const createEventThunk = (event) => {
  return (dispatch) => {
    const databaseServicePromise = getDatabaseServicePromise(event, "POST");

    databaseServicePromise
      .then((value) => {
        dispatch(createEventAction(event));

        console.log(`axios value: ${JSON.stringify(value, null, 3)}`);
      })
      .catch((err) => {
        console.log(`axios error: ${JSON.stringify(err, null, 3)}`);
      });
  };
};
