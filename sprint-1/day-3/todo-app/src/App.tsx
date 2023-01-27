import { useState } from 'react'
import './App.css'
import Todo from './components/todos/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todo/>
    </div>
  )
}

export default App
