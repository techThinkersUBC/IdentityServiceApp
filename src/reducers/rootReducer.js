import { combineReducers } from 'redux';
import AgreeReducer from './agree.js';

const rootReducer = combineReducers({
    agree: AgreeReducer
});

export default rootReducer;
