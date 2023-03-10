import APIService from "../../services/apiService";
import { FETCH_API } from "./types";
export const retrieveAPI = () => async (dispatch) => {
    try {
      const res = await APIService.getAll();
      console.log("action",res)
  
      dispatch({
        type: FETCH_API,
        payload: res.data,
      });
    } catch (err) {
      console.log("fff",err);
    }
  };