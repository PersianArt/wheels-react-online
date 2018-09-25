import { usersConstants } from '../types';

const initialState = {
    all: [],
    meta: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case usersConstants.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case usersConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                all: action.all,
                meta: action.meta
            };
        case usersConstants.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case usersConstants.DELETE_USER_SUCCESS:
            return {
                ...state,
                all: state.all.filter( item => item.id !== action.id),
            };
        case usersConstants.DELETE_USER_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case usersConstants.EDIT_USER_SUCCESS:
            return {
                ...state,
                all: state.all.map( item => item.id === action.data.id ? item = action.data : item),
            };
        case usersConstants.EDIT_USER_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
};