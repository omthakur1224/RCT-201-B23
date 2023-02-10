import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React,{useState} from 'react'
import useCounter from './../hooks/useCounter';

const Counter1 = () => {

    // const [count,setCount]=useState(0);
    const {increment,decrement,count}=useCounter(15);
    return (
    <Flex textAlign={'center'} gap={5} direction='column'>

        <Heading as="h1">Counter-1</Heading>

        <Heading as="h1">{count}</Heading>

        <Flex gap={2}>

            <Button onClick={()=>increment(1)}>
                +1</Button>

            <Button onClick={()=>decrement(1)}>
                -1</Button>
        </Flex>
    </Flex>
  )
}

export default Counter1