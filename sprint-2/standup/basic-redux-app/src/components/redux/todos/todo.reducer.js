import { ADD_TODOs, GET_TODOS } from "./todo.actionTypes"

const initState={
    todos:[]
    }

export const todoReducer=(state=initState,{type,payload})=>{

    switch(type){
        case ADD_TODOs:
        return {
            ...state,
            todos:[...state.todos,payload]
        }
        case GET_TODOS:
        return {
            ...state,
            todos:payload
        }
        default :
                return state
        

    }
}