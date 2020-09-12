import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { toyReducer } from './reducers/toyReducer';
import { userReducer } from './reducers/userReducer';
import { filterReducer } from './reducers/filterReducer';
import { reviewReducer } from './reducers/reviewReducer';
import { systemReducer } from './reducers/systemReducer';


const rootReducer = combineReducers({
    toyReducer,
    userReducer,
    filterReducer,
    reviewReducer,
    systemReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))