export const initialStateCities = {
	cities: [
		{
			name: "",
			location: "",
			points: [{ done: false, value: "" }],
		},
		{
			name: "",
			location: "",
			points: [{ done: false, value: "" }],
		},
	],
};

const mainReducer = (state = initialStateCities, action) => {
	switch (action.type) {
		case "LOAD_LISTS":
			return {
				...state,
				cities: action.payload,
			};
		case "DELETE_LISTS":
			return {
				...state,
                cities: state.cities.filter(
                    (list, index) => index !== action.payload)
			};
		default:
			return state;
	}
};

export default mainReducer;
