import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';

export enum TodoStatus{
  Pending="Pending",
  Process="Process"
}

export interface TodoType{
  id?:number,
  title:string,
  status:TodoStatus,
}
// id,status,title
const Todo = () => {
const [data,setData]=useState([]);

  const addTodo=(data:TodoType)=>{
    fetch('http://localhost:8080/todos',{
      method:"POST",
      body:JSON.stringify(data),
      headers:{"Content-Type":"application/json"}
    })
    .then((res)=>res.json())
    .then((res)=>getTodo());
  }
const getTodo=()=>{
    fetch('http://localhost:8080/todos')
    .then((res)=>res.json())
    .then((res)=>setData(res))
  }

 useEffect(()=>{
  getTodo();
 },[])
return (
    <div>
      <TodoInput addTodo={addTodo}/>
      <TodoList data={data} setData={setData}/>
    </div>
  )
}

export default Todo
