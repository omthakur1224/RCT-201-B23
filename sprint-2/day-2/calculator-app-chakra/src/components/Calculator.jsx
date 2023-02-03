import {  Grid } from '@chakra-ui/react'
import React from 'react'
import CalculatorButton from './CalculatorButton';

let buttons=["1","2","3","4","5","6","7","8","9","0","C","=","+","-","*"];         

const Calculator = () => {
return (
<>
<Grid templateColumns="repeat(3,1fr)" ml={100} mr={100} gap={2} mt={1} >
  {
    buttons.map((button,index)=>
            <CalculatorButton key={index}>{button}</CalculatorButton>
            )
        }
    </Grid>
</>
  )
}

export default Calculator