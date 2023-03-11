// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { FETCH_API } from "../store/actions/types"
// import { useDispatch } from "react-redux";

// const initialState = [];

// function tutReducer(tutorials = initialState, action) {
//   const { type, payload } = action;
//   console.log("slice", type)

//   switch (type) {

//     case FETCH_API:
//       return payload;

//     default:
//       return tutorials;
//   }
// };

// export default tutReducer

// // export const getFetch = createAsyncThunk("fetchApi/getData", async(args, {
// //     rejectWithValue
// // }) =>{
// //     try{
// //         const dispatch = useDispatch()

// //         const data = await axios.get("http://127.0.0.1:3000/get-users")
// //         console.log("sliceD",data)
// //         dispatch( data)


// //     }catch(err){
// //         // rejectWithValue(err.response)

// //     }
// // })

// // const fetchSlice = createSlice({
// //     name: "fetchApi",
// //     initialState: {
// //         user: [],
// //         isLoading:false, 
// //         isSuccess:false, 
// //         message:""
// //     },
// //     reducers:{},
// //     extraReducers: {
// //         [getFetch.pending]:(state, {payload}) =>{
// //             state.isLoading = true

// //         },
// //         [getFetch.fulfilled]:(state, {payload}) =>{
// //             state.isLoading = true
// //             state.user = payload
// //             state.isSuccess = true

// //         },
// //         [getFetch.rejected]:(state, {payload}) =>{
// //             state.isLoading = false
// //             state.message=payload

// //         }
// //     }
  
// // })

// // export default fetchSlice;