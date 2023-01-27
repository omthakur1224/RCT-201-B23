import React from 'react'
import { TodoType } from './Todo'

interface TodoListProps{
  data:TodoType[];
}

const TodoList = (props:TodoListProps) => {
  return (
    <div>
       {
        props.data.map((item,index)=>(
          <h3 key={index}>{item.title}-{item.status}</h3>
        ))
       }
    </div>
  )
}

export default TodoList