import React from 'react'

const TodoItem = ({todos}) => {
  return (
    <div>
      {todos.map((todo,index)=>
        
        ( <div>{todo.title}</div>
        )
      )}
    </div>
  )
}

export default TodoItem
