import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todos/todo.reducer";

let composeEnhacer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(todoReducer,applyMiddleware(thunk))