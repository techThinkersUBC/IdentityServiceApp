import {
    SET_EMAIL,
    SET_PASSWORD,
    SET_NAME
} from '../actions/login.js';

export const initialState = {
    email: "",
    password: "",
    name: "",
};

export default function agreeReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.email,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case SET_NAME:
            return {
                ...state,
                name: action.name,
            };
        default:
            return state;
    }
}
