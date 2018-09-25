import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];
let argCompose = compose(
    applyMiddleware(...middleware)
);

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
    argCompose = compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

const store = createStore(
    rootReducer,
    initialState,
    argCompose
);

export default store;
