import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/reducer";
import reduxThunk from "redux-thunk";
const initialState = {};
// for dev tools
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState);
export default store;