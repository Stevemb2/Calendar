import { createEventAction } from "./createEventAction";
import { databaseService } from "../services/databaseService";

export const createEventThunk = (event) => {
  return async (dispatch) => {
    try {
      const value = await databaseService(event, "POST");

      console.log(`axios value: ${JSON.stringify(value, null, 3)}`);

      dispatch(createEventAction(event));
    } catch (err) {
      console.log(`axios error: ${JSON.stringify(err, null, 3)}`);
    }
  };
};
