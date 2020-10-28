export const initialState = {
    cityDetail: {
        name: "Parques de Itabira",
        location: "Itabira",
        points: [
            {
                done: true,
                point: "Pracinha Redonda"
            }
        ]
    }
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_LIST':
            return {
                ...state,
                cityDetail: action.payload
            }
        default: 
            return state;
    }
}

export default appReducer;