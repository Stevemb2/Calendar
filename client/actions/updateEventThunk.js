import { updateEventAction } from "./updateEventAction";
import { getDatabaseServicePromise } from "../services/getDatabaseServicePromise";

export const updateEventThunk = (event) => {
  return (dispatch) => {
    const databaseServicePromise = getDatabaseServicePromise(event, "PUT");

    databaseServicePromise
      .then((value) => {
        dispatch(updateEventAction(event));

        console.log(`axios value: ${JSON.stringify(value, null, 3)}`);
      })
      .catch((err) => {
        console.log(`axios error: ${JSON.stringify(err, null, 3)}`);
      });
  };
};
