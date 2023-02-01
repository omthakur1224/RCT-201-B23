import { useEffect, useRef,useState } from "react";

const useStopWatch=()=>{
    const [time,setTime]=useState(0);
    const timerId=useRef(null);
    
    let start=()=>{
        timerId.current=setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000)
    }

    let pause=()=>{
        clearInterval(timerId.current);
        timerId.current=null;
    }
    let reset =()=>{
        clearInterval(timerId.current);
        timerId.current=null;
        setTime(0);
    }
    let addSeconds=(value)=>{
        setTime((prev)=>prev+value)
    }
    useEffect(()=>{
        return reset;
    //    // eslint-disable-next-line react-hooks/ exhaustive-deps
    },[])
    
    return{time,start,pause,reset,addSeconds}
}

export default useStopWatch;