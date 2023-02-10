import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { GET_TODO } from '../redux/actionTypes';
import { addTodos, getTodos } from '../redux/action';
const Todo = () => {
    const data=useSelector(store=>store.todos)
    const [text,setText]=useState('')
    const dispatch=useDispatch()
    const handleClick=async()=>{
        let todo={
            "title":text,
            "status":"pending"
        }
    //   addTodos(todo,dispatch);
      dispatch(getTodos(todo))
    }
    const handleChange=(e)=>{
        setText(e.target.value)
    }
  
    useEffect(()=>{
       dispatch(getTodos())
    },[])
  return (
    <div>
     <input type='text' onChange={handleChange}/>
     <button onClick={handleClick}>Add todo</button>
     {
        data.map((item,index)=>
        (<div key={item.id}>
            {item.title}-{item.status}
        </div>)
        )
     }
    </div>
  )
}

export default Todo
