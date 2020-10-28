import { combineReducers } from 'redux';
import appReducer from './app';
import deleteTaskReducer from './delete';

const allReducers = combineReducers({
    deleteTask: deleteTaskReducer,
    app: appReducer
});

export default allReducers;