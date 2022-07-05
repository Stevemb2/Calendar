import { deleteEventAction } from "./deleteEventAction";
import { databaseService } from "../services/databaseService";

export const deleteEventThunk = (event) => {
  return async (dispatch) => {
    try {
      const value = await databaseService(event, "DELETE");

      console.log(`axios value: ${JSON.stringify(value, null, 3)}`);

      dispatch(deleteEventAction(event));
    } catch (err) {
      console.log(`axios error: ${JSON.stringify(err, null, 3)}`);
    }
  };
};
