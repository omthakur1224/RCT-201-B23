import React, { useState } from 'react'
import { TodoStatus, TodoType } from '../../constants/constants'

interface TodoInputProps{
    addTodo:(obj:TodoType)=>void;
    getTodos:()=>void
}
const TodoInput = (props:TodoInputProps) => {
    const [todo,setTodo]=useState("")
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{id,value}=e.target;
        console.log(id,value,"input")
        setTodo(value)
      }
  return (
    <div>
        <input id='todo-input' type="text" placeholder='task todo' onChange={handleChange}/>
        <button onClick={()=>
        {
            props.addTodo({title:todo,status:TodoStatus.Pending});
        }
            }>Add Todo</button>
    </div>
  )
}

export default TodoInput