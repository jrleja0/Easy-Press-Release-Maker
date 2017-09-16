import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import user from './user';
import docStore from './docStore';

const reducer = combineReducers({ user, docStore });
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './docStore';
