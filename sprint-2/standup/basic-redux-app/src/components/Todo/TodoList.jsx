import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos, getTodos, toggle } from '../redux/todos/todo.action';

const TodoList = () => {

  const todos=useSelector(store=>store.todos);

  const dispatch=useDispatch();


  const handleToggle=(todo)=>{
    console.log(todo,"inside hadleToggle")

    dispatch(toggle(todo));
    dispatch(getTodos());
  }

  return (
    <div>
      {todos.map((todo,index)=>
        <div key={index} style={{display:"flex","flexDirection":"row","gap":"10px"}}>
          <h3>{todo.title}</h3>

          <button onClick={()=>handleToggle(todo)}>
            {todo.status?"Done":"Pending"}</button>

          <button onClick={()=>dispatch(deleteTodos(todo.id))}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default TodoList
