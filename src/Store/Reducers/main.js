export const initialStateCities = {
	cities: [
		{
			name: "Parques de Itabira",
			location: "Itabira",
			points: [{ done: false, value: "Pracinha Redonda" }],
		},
		{
			name: "Parques de Itabira",
			location: "Itabira",
			points: [{ done: false, value: "Pracinha Redonda" }],
		},
	],
};

const mainReducer = (state = initialStateCities, action) => {
	switch (action.type) {
		case "LOAD_LISTS":
			return {
				...state,
				cities: action.payload
			};
		default:
			return state;
	}
};

export default mainReducer;
