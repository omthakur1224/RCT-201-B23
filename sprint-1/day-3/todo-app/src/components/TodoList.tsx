import React from 'react'
import { TodoType } from '../constants/constants'

interface TodoListProps{
    data:Array<TodoType>
}

const TodoList = ({data}:TodoListProps) => {
  return (
    <div>
        {
            data.map((item,index)=>(
                <h3 key={index}>{item.title}-{item.status}</h3>
            ))
        }
    </div>
  )
}

export default TodoList