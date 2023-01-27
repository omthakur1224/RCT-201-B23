import React from 'react'
import { TodoStatus, TodoType } from './Todo'
import TodoItems from './TodoItems';

interface TodoListProps{
  data:TodoType[],
  setData:(x:any)=>Array<TodoType>
}

const TodoList = (props:TodoListProps) => {
  const toggleStatus=(id:number|undefined)=>{
    let filtered=props.data.filter((item)=>{if(item.id==id){
      return item.status=TodoStatus.Process;
    } })
    props.setData(filtered)
  }
  // props.data=filtered;
  return (
    <div>
       {
        props.data.map((item,index)=>(
          <h3 key={index}>
            {item.title}-
            <button onClick={()=>toggleStatus(item.id)}>
            {item.status}
            </button>
          </h3>
        ))
       }
    </div>
  )
}

export default TodoList