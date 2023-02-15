// DO NOT rename the reducer
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
// import legacy_createStore from 'redux'

const store = legacy_createStore(reducer,applyMiddleware(thunk));

export { store };


//NOTE: Do not remove this code, it is used for calculating your score, if removed it will give you zero marks
if(window.Cypress){
  window.store = store;
}