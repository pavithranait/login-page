import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { fetchuser } from '../slice/apiSlice';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    fetchuser,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;