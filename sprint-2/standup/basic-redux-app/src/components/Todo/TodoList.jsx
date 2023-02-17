import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos, getTodos, toggle } from '../redux/todos/todo.action';

const TodoList = ({data,handleToggle,handleDelete}) => {

  console.log('LIst child rendered')
  return (
    <div>
      {data.length>0 && data.map((todo,index)=>
        <div key={index} style={{display:"flex","flexDirection":"row","gap":"10px"}}>
          <h3>{todo.title}</h3>

          <button onClick={()=>handleToggle(todo)}>
            {todo.status?"Done":"Pending"}</button>

          <button onClick={()=>handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default React.memo(TodoList)
