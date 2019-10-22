import {
    GET_APP_PERMISSIONS_REQUEST,
    GET_APP_PERMISSIONS_ERROR,
    GET_APP_PERMISSIONS_SUCCESS
} from '../actions/agree.js';

export const initialState = {
    permissions: null,
    loading: false,
    error: null,
};

export default function agreeReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_APP_PERMISSIONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_APP_PERMISSIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case GET_APP_PERMISSIONS_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                permissions: action.payload,
            };
        default:
            return state;
    }
}
