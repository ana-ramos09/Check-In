import MiniListContainer from "./Components/MiniListContainer/MiniListContainer";
import ListContainer from "./Components/ListContainer/ListContainer";

export const routes = [
	{
		path: "/list",
		component: ListContainer
	},
	{
		path: "/",
		component: MiniListContainer
	}
];