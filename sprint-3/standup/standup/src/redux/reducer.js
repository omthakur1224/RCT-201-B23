import * as types from './actionTypes'
const initialState={
    todos:[],
}

export const todoReducer=(state=initialState,{type,payload})=>{

        switch(type){
            case types.ADD_TODO:
                return {
                    ...state,
                    todos:[...state.todos,payload]
                }
             case types.GET_TODO:
                return {
                    ...state,
                    todos:payload
                }
            default:
                return state
        }
}