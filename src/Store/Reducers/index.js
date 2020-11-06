import { combineReducers } from "redux";
import appReducer from "./app";
import mainReducer from "./main";

const allReducers = combineReducers({
	app: appReducer,
	main: mainReducer,
});

export default allReducers;
