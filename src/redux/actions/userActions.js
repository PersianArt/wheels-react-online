import { usersConstants } from '../types';
import Api from "../../modules/api/apis";

export const getUsers = (data) => dispatch => {

    dispatch({ type: usersConstants.GET_USERS_REQUEST });

    Api.getUsersApi(data).then(
        res => {
            dispatch({ type: usersConstants.GET_USERS_SUCCESS, all: res.data.data, meta: res.data.meta });
        },
        error => {
            dispatch({ type: usersConstants.GET_USERS_FAILURE, error: error.response.data.data });
        }
    );
};

export const editUser = (data) => dispatch => {

    // dispatch({ type: usersConstants.EDIT_USER_REQUEST });

    return new Promise((resolve, reject) => {
        Api.editUserApi(data).then(
            res => {
                dispatch({ type: usersConstants.EDIT_USER_SUCCESS, data });
                resolve();
            },
            error => {
                dispatch({ type: usersConstants.EDIT_USER_FAILURE, error: error.response.data.data });
                reject();
            }
        );
    })
};

export const deleteUser = (data) => dispatch => {

    // dispatch({ type: usersConstants.DELETE_USER_REQUEST });

    Api.deleteUserApi(data).then(
        res => {
            dispatch({ type: usersConstants.DELETE_USER_SUCCESS, id: data.id });
        },
        error => {
            dispatch({ type: usersConstants.DELETE_USER_FAILURE, error: error.response.data.data });
        }
    );
};



