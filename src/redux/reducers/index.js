import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import users from './usersReducer';
import products from './productReducer';

export default combineReducers({
    auth,
    users,
    products,
    form: formReducer
});