import State from "ol/source/State";

export const initialState = {
  cityDetail: {
    name: "Parques de Itabira",
    location: "Itabira",
    points: [{ done: true, value: "Pracinha Redonda" }],
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

    default:
      return state;
  }
};

export default appReducer;
