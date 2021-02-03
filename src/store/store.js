import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { guestsReducer } from '../reducers/guestsReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    ui: uiReducer,
    guests: guestsReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);