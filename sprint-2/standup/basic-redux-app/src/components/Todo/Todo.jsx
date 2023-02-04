import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/todos/todo.action';

const Todo = () => {
 
  const todos=useSelector((store)=>store.todos)
  const dispatch=useDispatch();

  console.log(todos)
  useEffect(()=>{
    dispatch(getTodos())
  },[])
  return (
    <div>
      <TodoInput/>
      <TodoList />
      {/* <TodoItem todos={todos}/> */}
    </div>
  )
}

export default Todo
