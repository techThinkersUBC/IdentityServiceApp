import { combineReducers } from 'redux';
import AgreeReducer from './agree.js';
import LoginReducer from './login.js';

const rootReducer = combineReducers({
    agree: AgreeReducer,
    login: LoginReducer,
});

export default rootReducer;
