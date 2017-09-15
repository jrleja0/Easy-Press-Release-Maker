import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import userStore from './userStore';
import docStore from './docStore';

const reducer = combineReducers({ userStore, docStore });
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default store;
export * from './userStore';
export * from './docStore';
