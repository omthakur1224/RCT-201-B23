import axios from "axios"
import { ADD_TODOs, GET_TODOS } from "./todo.actionTypes"


export const addTodos=()=>(dispatch)=>{
    console.log(todo,'todo')
    let x={
      "title":todo,
      "status":"pending"
    }
    let response= axios.post('http://localhost:8080/todos',x)
    .then((res)=>res.data)
    // console.log(response.json(),'rresponse')
}

export const getTodos=()=>async(dispatch)=>{
    let response =await axios.get("http://localhost:8080/todos")
    .then((res)=>dispatch({type:GET_TODOS,payload:res.data}))
    return 
}