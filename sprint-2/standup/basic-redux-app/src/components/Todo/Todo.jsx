import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/todos/todo.action';

const Todo = () => {
   
  return (
    <div>

      <TodoInput handleTodo={handleTodo}/>
      {/* <TodoItem todos={todos}/> */}
    </div>
  )
}

export default Todo
