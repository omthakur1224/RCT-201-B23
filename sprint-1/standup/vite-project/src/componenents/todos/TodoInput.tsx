import React, { useState } from 'react'
import { TodoStatus, TodoType } from './Todo';

interface TodoInputProps{
  addTodo:(a:TodoType)=>void
}
const TodoInput = ({addTodo}:TodoInputProps) => {

  const[text,setText]=useState('');

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setText(e.target.value);
  }

return (
    <div>
      <input type="text" placeholder='add your task' onChange={handleChange}/>
      <button onClick={()=>addTodo({"title":text,"status":TodoStatus.Pending})}>Add Todo</button>
    </div>
  )
}

export default TodoInput
