import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(10)
  return (
    <div>
      <h1>count {count}</h1>
      <button  data-testid='addBtn' onClick={()=>setCount(prev=>prev+1)}>add</button>
      <button data-testid='reduceBtn' onClick={()=>setCount(prev=>prev-1)}>reduce</button>
    </div>
  )
}

export default Counter