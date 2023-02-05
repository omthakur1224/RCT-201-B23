import { ADD_TODOs, DELETE_TODOS, GET_TODOS, TOGGLE } from "./todo.actionTypes"

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
        case DELETE_TODOS:
            console.log(state.todos,"before delete")
            let filtereddata=state.todos.filter((elem)=>elem.id!=payload)
            console.log(filtereddata,"afterdelete")
            return {
                ...state,
                todos:filtereddata
            }
            case TOGGLE:
            // console.log(state.todos,"before toggle")
            //  let toggleData=state.todos.map((elem)=>{if(elem.id==payload.id){
            //      elem=payload
            // }})
            // console.log(toggleData,"afterToggle")
            return {
                state
            }
        default :
                return state
        }
}