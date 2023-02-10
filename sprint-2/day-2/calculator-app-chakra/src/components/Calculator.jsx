import {  Grid, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CalculatorButton from './CalculatorButton';

let buttons=["1","2","3","4","5","6","7","8","9","0","C","=","+","-","*"];         

const Calculator = () => {
  const [input,setInput]=useState("");

    // const dispatch=useDispatch()

    // const output=useSelector((store)=>store.output)
    //  console.log(output,"output")
    const [data,setData]=useState(0);

    useEffect(()=>{
      // setValue(output)
      setData()
    },[])

    useEffect(()=>{
      console.log('event',data,input)
      if(input==='='){
            if(data.includes("+")){
              // dispatch(add(data))
              // setData(output)
                let x=data;
                x=x.split("+");
                x=Number(Number(x[0])+Number(x[1]));
                setData(x)
            }
            else if(data.includes("-")){
              
              // dispatch(subtract(data));
                let x=data;
                x=x.split("-");
                x=Number(Number(x[0])-Number(x[1]));
                setData(x)
            }
            else if(data.includes("*")){
              // dispatch(multiply(data))
                let x=data;
                x=x.split("*");
                x=Number(Number(x[0])*Number(x[1]));
                setData(x)
            }
            else if(data.includes("/")){
              // dispatch(divide(data))
                let x=data;
                x=x.split("/");
                x=Number(Number(x[0])/Number(x[1]));
                setData(x)
            }
        }
        else if(data[data.length-1]==="+"){
           //11+
           let x=data.split("+");

            setData(data+input)
        }
        else if(data[data.length-1]==="-"){
          // console.log("minus",typeof(data))
            setData((data)+(input))
        }
        else if(data[data.length-1]==="*"){
          
            setData((data)+(input))
        }
        else if(data[data.length-1]==="/" ){
          
            setData((data)+(input))
        }else{

            setData(data+input);
        }
    },[input])
    // console.log(data)

    const handleInput=(e)=>{
      // if(data==="")
    //  console.log(input)
    //   if(input[input.length-1]===e.target.value){
    //     let newVal=e.target.value+"";
    //     setInput(newVal)
    //   }
    //   else
      setInput(e.target.value)
    }
return (
<>
<Heading as={"h1"}>{input}</Heading>
<Grid templateColumns="repeat(3,1fr)" ml={100} mr={100} gap={2} mt={1} >
  {
    buttons.map((button,index)=>
            <CalculatorButton onClick={(e)=>handleInput(e)} key={index}>{button}</CalculatorButton>
            )
        }
    </Grid>
</>
  )
}

export default Calculator