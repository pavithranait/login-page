import APIService from "../../services/apiService";
import { Dispatch } from "redux";
import { FETCH_API } from "./types";

export const retrieveAPI = () =>  (dispatch) => {
    try {
      const res =  APIService.getAll();
      console.log("action",res)
  
      dispatch({
        type: FETCH_API,
        payload: res.data
      });
    } catch (err) {
      console.log("fff",err);
    }
  };