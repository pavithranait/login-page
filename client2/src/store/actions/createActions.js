import { ActionTypes } from "../constants";
export const selectedUser = (user) => {
    return {
      type: ActionTypes.GET_DATA,
      payload: user,
    }
  }