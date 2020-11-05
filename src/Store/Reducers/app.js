export const initialState = {
  cityDetail: {
    name: "Parques de Itabira",
    location: "Itabira",
    points: [{ done: false, value: "Pracinha Redonda" }],
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
          points: state.cityDetail.points.filter(
            (value, index) => index !== action.payload
          ),
        },
      };
    case "ADD_TASK":
      return {
        ...state,
        cityDetail: {
          ...state.cityDetail,
          points: [{ done: false, value: "" }, ...state.cityDetail.points],
        },
      };
    case "EDIT_TASK":
      return {
        ...state,
        cityDetail: {
          ...state.cityDetail,
          points: state.cityDetail.points.map((item, index) => {
            if (index === action.payload.index) {
              return {
                done: action.payload.done,
                value: action.payload.value,
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
