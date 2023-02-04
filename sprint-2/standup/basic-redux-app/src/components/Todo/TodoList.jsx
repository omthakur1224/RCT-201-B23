import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos=useSelector(store=>store.todos)
  return (
    <div>
      {todos.map((todo,index)=>
        <div key={index}>
          <h1>{todo.title}-{todo.status}</h1>
        </div>
      )}
    </div>
  )
}

export default TodoList
