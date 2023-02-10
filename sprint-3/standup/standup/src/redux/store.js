import {applyMiddleware, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import { todoReducer } from './reducer';

export const store=legacy_createStore(todoReducer,applyMiddleware(thunk));