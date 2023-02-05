import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from './../redux/todos/todo.action';

const TodoInput = ({handleTodo}) => {
  const [todo,setTodo]=useState("");
  const dispatch=useDispatch()
  return (
    <div style={{display:"flex","flexDirection":"row"}}>
      <input type={'text'} 
      placeholder='title' 
      id='todo'
       onChange={(e)=>setTodo(e.target.value)}/>
       <button onClick={()=>dispatch(addTodos(todo))}>Add Todo</button>
    </div>
  )
}

export default TodoInput