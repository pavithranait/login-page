import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../slice/apiSlice';
// import { getFetch } from '../slice/fetchSlice';


let reducer = {
  // fetchApi: getFetch,
  api: apiSlice
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;