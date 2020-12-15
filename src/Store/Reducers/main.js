export const initialStateCities = {
	cities: [
		{
			name: "",
			location: "",
			tasks: [{ visited: false, description: "", latitude: "", longitude: "" }],
			id: "",
		},
		{
			name: "",
			location: "",
			tasks: [{ visited: false, description: "", latitude: "", longitude: "" }],
			id: "",
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
				cities: state.cities.filter((city, index) => index !== action.payload),
			};
		case "REFRESH_LIST":
			return {
				...state,
				cities: state.cities.map((city) => {
					if (city.id === action.payload.id) {
						return action.payload;
					} else {
						return city;
					}
				}),
			};
		default:
			return state;
	}
};

export default mainReducer;
