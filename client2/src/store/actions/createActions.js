import APIService from "../../services/apiService";
import { Dispatch } from "react";
import { FETCH_API } from "./types";
export const retrieveAPI = () => async (Dispatch) => {
    try {
      const res = await APIService.getAll();
      console.log("action",res)
  
      Dispatch({
        type: FETCH_API,
        payload: res.data
      });
    } catch (err) {
      console.log("fff",err);
    }
  };