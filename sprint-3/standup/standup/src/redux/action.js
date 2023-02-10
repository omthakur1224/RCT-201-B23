import axios from "axios"
import { ADD_TODO } from "./actionTypes"


export const addTodos=async(todo,dispatch)=>{

    await axios.post('http://localhost:4040/todos',todo)
    .then((res)=>dispatch({type:ADD_TODO,payload:todo}))
}
export const getTodos=()=>async(dispatch)=>{

    await axios.get('http://localhost:4040/todos')
    .then((res)=>dispatch({type:ADD_TODO,payload:res.data}))
}