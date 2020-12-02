import { combineReducers } from "redux";
import appReducer from "./app";
import mainReducer from "./main";
import openLayersReducer from "./openLayers";

const allReducers = combineReducers({
	app: appReducer,
	main: mainReducer,
	ol: openLayersReducer,
});

export default allReducers;
