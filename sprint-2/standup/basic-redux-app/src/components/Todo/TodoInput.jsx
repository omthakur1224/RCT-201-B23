import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const TodoInput = ({handleTodo}) => {
  const [todo,setTodo]=useState("");

  console.log('TodoInput')
  return (
    <div style={{display:"flex","flexDirection":"row"}}>
      <input type={'text'} 
      placeholder='title' 
      id='todo'
       onChange={(e)=>setTodo(e.target.value)}/>
       <button onClick={()=>handleTodo(todo)}>Add Todo</button>
    </div>
  )
}

export default React.memo(TodoInput)