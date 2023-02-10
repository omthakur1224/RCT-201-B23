import { useState } from "react";

const useCounter=(initialValue:number)=>{
    const[count,setCount]=useState(initialValue);

    const increment=(value:number)=>{
        setCount((prev)=>prev+value)
    }

    const decrement=(value:number)=>{
        setCount((prev)=>prev-value)
    }
  return {increment,decrement,count}
}
export default useCounter;