export const initialState = {
	cityDetail: {
		name: "",
		location: "",
		tasks: [
			{
				visited: false,
				description: "",
				latitude: "-46.6604517",
				longitude: "-23.5577504",
			},
			{
				visited: true,
				description: "",
				latitude: "-45.6604517",
				longitude: "-22.5577504",
			},
		],
		id: "",
	},
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_LIST":
			return {
				...state,
				cityDetail: action.payload,
			};
		case "DELETE_TASK":
			return {
				...state,
				cityDetail: {
					...state.cityDetail,
					tasks: state.cityDetail.tasks.filter(
						(value, index) => index !== action.payload
					),
				},
			};
		case "ADD_TASK":
			return {
				...state,
				cityDetail: {
					...state.cityDetail,
					tasks: [
						{ visited: false, description: "", latitude: "", longitude: "" },
						...state.cityDetail.tasks,
					],
				},
			};
		case "EDIT_TASK":
			return {
				...state,
				cityDetail: {
					...state.cityDetail,
					tasks: state.cityDetail.tasks.map((item, index) => {
						if (index === action.payload.index) {
							return {
								visited: action.payload.visited,
								description: action.payload.description,
								latitude: item.latitude,
								longitude: item.longitude,
							};
						} else {
							return item;
						}
					}),
				},
			};
		case "UPLOAD_COORDINATES":
			return {
				...state,
				cityDetail: {
					...state.cityDetail,
					tasks: state.cityDetail.tasks.map((item, index) => {
						if (index === action.payload.index) {
							return {
								visited: item.visited,
								description: item.description,
								latitude: action.payload.coordinates[0],
								longitude: action.payload.coordinates[1],
							};
						} else {
							return item;
						}
					}),
				},
			};
		default:
			return state;
	}
};

export default appReducer;
