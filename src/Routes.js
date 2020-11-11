import MiniList from "./Components/miniList/miniList.js";
import List from "./Components/List/List.js";

export const routes = [
	{
		path: "/",
		component: { MiniList }
	},
	{
		path: "/list",
		component: { List }
	},
];