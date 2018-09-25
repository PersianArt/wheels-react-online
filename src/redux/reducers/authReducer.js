import { authConstants } from '../types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false};

export default function (state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                loading: true
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case authConstants.LOGIN_FAILURE:
            return {
                error: action.error
            };
        case authConstants.LOGOUT:
            return {};
        default:
            return state
    }
};