// import State from "ol/source/State";

export const initialState = {
  cityDetail: {
    name: "Dogs",
    location: "Dogland",
    tasks: [
      { visited: false, description: "Pracinha Redonda" },
      { visited: true, description: "Outra Praça" }
    ]

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
          tasks: [{ visited: false, description: "" }, ...state.cityDetail.tasks],
        },
      };
    case "EDIT_TASK":
      return {
        ...state,
        cityDetail: {
          ...state.cityDetail,
          tasks: 
            state.cityDetail.tasks.map((item, index) => {
              if (index === action.payload.index) {
                return {
                  visited: action.payload.visited,
                  description: action.payload.description,
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
