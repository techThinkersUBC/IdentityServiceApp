import * as AgreeService from '../services/agree.js';

export const GET_APP_PERMISSIONS_REQUEST = 'GET_APP_PERMISSIONS_REQUEST';
export const GET_APP_PERMISSIONS_ERROR = 'GET_APP_PERMISSIONS_ERROR';
export const GET_APP_PERMISSIONS_SUCCESS = 'GET_APP_PERMISSIONS_SUCCESS';

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

