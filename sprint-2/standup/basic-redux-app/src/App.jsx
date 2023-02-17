import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './components/Todo/Todo'
import TodoInput from './components/Todo/TodoInput'
 
const adding=(num)=>{
  let sum=0;
  for(let i=0;i<888888888;i++){
    sum+=i;
  }
  console.time("time") 
  return sum 
}
function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState([]);

  const handleTodo=useCallback(
    (text)=>{
      let task={
        "id":Date.now(),
        'title':text,
        "status":"pending"
      }    
     setData([...data,task])
     },[])
   
   console.log("parent counter rendered")
  return (
    <div className="App">
      {count}
      <button onClick={()=>setCount((prev)=>prev+1)}>add count</button>
      <TodoInput handleTodo={handleTodo} />
    </div>
  )
}

export default App
