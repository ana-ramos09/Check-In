import initialState from './app';

const deleteTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TASK':
            return initialState.splice(0,1)
        default:
            return state;
    }
}

export default deleteTaskReducer;