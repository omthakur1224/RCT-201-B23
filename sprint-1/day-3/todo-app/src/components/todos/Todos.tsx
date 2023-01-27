import React, { useEffect, useState } from 'react'
import { addTodo } from '../../apis/api';
import { TodoType } from '../../constants/constants';
import TodoList from '../TodoList';
import TodoInput from './TodoInput';

const Todos = () => {
    const [data,setData]=useState([]);

    const addTodo=(data:TodoType)=>{
      fetch('http://localhost:8080/todos',
       {
         method:"POST",
         body:JSON.stringify(data),
         headers:{"Content-Type":"application/json"}
       }
     ).then((res)=>res.json())
     .then((res)=>getTodos());
   }

const getTodos=()=>{
    let response=fetch('http://localhost:8080/todos')
    .then((res)=>res.json())
    .then((res)=>setData(res))
    console.log("getTodo",data)
  }
 
  useEffect(()=>{
    getTodos();
  },[])
  
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} getTodos={getTodos}/>
      <TodoList data={data}/>
    </div>
  )
}
export default Todos
