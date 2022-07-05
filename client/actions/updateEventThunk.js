import { updateEventAction } from "./updateEventAction";
import { databaseService } from "../services/databaseService";

export const updateEventThunk = (event) => {
  return async (dispatch) => {
    try {
      const value = await databaseService(event, "PUT");

      console.log(`axios value: ${JSON.stringify(value, null, 3)}`);

      dispatch(updateEventAction(event));
    } catch (err) {
      console.log(`axios error: ${JSON.stringify(err, null, 3)}`);
    }
  };
};
