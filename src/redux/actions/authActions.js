import { authConstants } from '../types';
import Api from "../../modules/api/apis";

export const logIn = (data) => dispatch => {

    dispatch({ type: authConstants.LOGIN_REQUEST });

    Api.getLoginApi(data).then(
        res => {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            dispatch({ type: authConstants.LOGIN_SUCCESS, user: res.data.user });
        },
        error => {
            dispatch({ type: authConstants.LOGIN_FAILURE, error: error.response.data.data });
        }
    );
};

export const logOut = () => dispatch => {

    localStorage.removeItem('user');
    dispatch({ type: authConstants.LOGOUT });
};

export const authUser = () => dispatch => {

    Api.checkAuthApi().then(
        res => {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            dispatch({ type: authConstants.LOGIN_SUCCESS, user: res.data.user });
        },
        error => {
            dispatch(logOut());
        }
    );
};

