
import { TodoType } from "../constants/constants"

export const addTodo=(data:TodoType)=>{
    fetch('http://localhost:8080/todos',
     {
       method:"POST",
       body:JSON.stringify(data),
       headers:{"Content-Type":"application/json"}
     }
   ).then((res)=>res.json())
  //  .then((res)=>getTodos())
 }