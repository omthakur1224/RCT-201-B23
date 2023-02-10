import { Heading, Box, Button, Input, Grid, Flex } from '@chakra-ui/react';
import React,{useState} from 'react'

const Counter3 = () => {
    const [count,setCount]=useState(0);

    const [decrement,SetDecrement]=useState("");

    const handleDecrement=()=>{
        setCount((prev)=>prev-+decrement)
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        SetDecrement(e.target.value)
    }
    return (
    <>
        <Flex textAlign={'center'} direction='column' gap={5}>
        <Heading as="h1">Counter-3</Heading>
            <Heading as="h1">{count}</Heading>
            <Flex gap={5} direction='column'alignContent={'center'}>
                <Input type={'number'} 
                   placeholder='Increment by'
                   id='input-value'
                   onChange={handleChange}
                   size='md'
                   w={200}
                   />
            <Flex gap={5}>
                <Button onClick={()=>setCount((prev)=>prev+5)}>
                    Increment by 5</Button>
                <Button onClick={handleDecrement}>
                    Decrement </Button>
            </Flex>
            </Flex>
        </Flex>
    </>
  )
}

export default Counter3
