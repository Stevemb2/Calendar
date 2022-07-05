import { deleteEventAction } from "./deleteEventAction";
import { getDatabaseServicePromise } from "../services/getDatabaseServicePromise";

export const deleteEventThunk = (event) => {
  return (dispatch) => {
    const databaseServicePromise = getDatabaseServicePromise(event, "DELETE");

    databaseServicePromise
      .then((value) => {
        dispatch(deleteEventAction(event));

        console.log(`axios value: ${JSON.stringify(value, null, 3)}`);
      })
      .catch((err) => {
        console.log(`axios error: ${JSON.stringify(err, null, 3)}`);
      });
  };
};
