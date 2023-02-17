import axios from "axios"
import { ADD_TODOs, DELETE_TODOS, GET_TODOS, TOGGLE } from "./todo.actionTypes"


export const addTodos=(todo)=>async(dispatch)=>{
    console.log(todo,'todo')
    let x={
      "title":todo,
      "status":false
    }
    // console.log(process.env.REACT_APP_PORT)
    let response= await axios.post(`http://localhost:8080/todos`,x)
    .then((res)=>dispatch({type:ADD_TODOs,payload:res.data}))
  }

export const getTodos=()=>async(dispatch)=>{
    let response =await axios.get(`http://localhost:8080/todos`)
    .then((res)=>dispatch({type:GET_TODOS,payload:res.data}))
  
}
export const deleteTodos=(id)=>async(dispatch)=>{
  let response =await axios.delete(`http://localhost:8080/todos/${id}`)
  .then((res)=>dispatch({type:DELETE_TODOS,payload:id}))

}
export const toggle=(todo)=>async(dispatch)=>{
 console.log("clicked toggle")
  todo={...todo,status:!todo.status}
  let response =await axios.put(`http://localhost:8080/todos/${todo.id}`,todo)
  .then((res)=>{res.data})
}