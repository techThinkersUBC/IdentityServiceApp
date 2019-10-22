import * as AgreeService from '../services/agree.js';
import * as LoginService from "../services/login";

export const GET_SESSION_TOKEN_REQUEST = 'GET_SESSION_TOKEN_REQUEST';
export const GET_SESSION_TOKEN_ERROR = 'GET_SESSION_TOKEN_ERROR';
export const GET_SESSION_TOKEN_SUCCESS = 'GET_SESSION_TOKEN_SUCCESS';

export const GET_APP_PERMISSIONS_REQUEST = 'GET_APP_PERMISSIONS_REQUEST';
export const GET_APP_PERMISSIONS_ERROR = 'GET_APP_PERMISSIONS_ERROR';
export const GET_APP_PERMISSIONS_SUCCESS = 'GET_APP_PERMISSIONS_SUCCESS';

export const getSessionToken = (appId, name, email, password) => {
    const request = LoginService.getSessionToken(appId, name, email, password);

    return (dispatch) => {
        dispatch({
            type: GET_SESSION_TOKEN_REQUEST
        });

        request.then(
            response => response.json().then((payload) =>
                dispatch({
                    type: GET_SESSION_TOKEN_SUCCESS,
                    payload,
                })
            ).catch((error) => dispatch({
                type: GET_SESSION_TOKEN_ERROR,
                error,
            }))
        ).catch(
            error => dispatch({
                type: GET_SESSION_TOKEN_ERROR,
                error,
            })
        );
    };
};

export const getPermissions = (appId) => {
    const request = AgreeService.getPermissions(appId);

    return (dispatch) => {
        dispatch({
            type: GET_APP_PERMISSIONS_REQUEST
        });

        request.then(
            response => response.json().then((payload) =>
                dispatch({
                    type: GET_APP_PERMISSIONS_SUCCESS,
                    payload,
                })
            ).catch((error) => dispatch({
                type: GET_APP_PERMISSIONS_ERROR,
                error,
            }))
        ).catch(
            error => dispatch({
                type: GET_APP_PERMISSIONS_ERROR,
                error,
            })
        );
    };
};
