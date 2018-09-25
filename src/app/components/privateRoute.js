import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import store from '../../redux/store';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        store.getState().auth.loggedIn
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);