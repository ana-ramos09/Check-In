import { combineReducers } from "redux";
import appReducer from "./app";

const allReducers = combineReducers({
  app: appReducer,
});

export default allReducers;
