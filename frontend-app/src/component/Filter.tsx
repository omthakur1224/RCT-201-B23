import { Box, Checkbox, CheckboxGroup, Heading, Stack } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Filter = () => {

  //to passing values to search bar
  const [searchParams,setSearchParams]=useSearchParams();

  //it gets earlier filter that are selected before re-render
  const initialFilterValue=searchParams.getAll('filter');

  const [filterValue,setFilterValue]=useState<string[]>(initialFilterValue||[]);

  const location=useLocation();

  const handleFilterValue=(value:string[])=>{

    setFilterValue(value)
  }

  useEffect(()=>{
    //params will accept filter as string of arr
    let params={};
    if(filterValue.length){
      //it is checking if filterValue that is an arr
      //have any value then
      //assign it to params obj
      params=filterValue
    }
    setSearchParams(params)
  },[filterValue])


console.log(filterValue)
  return (
    <Box p={6}>
        <Heading>Filter</Heading>
        <CheckboxGroup colorScheme='green'  value={filterValue}
                  onChange={handleFilterValue}>
            <Stack spacing={[1, 5]} direction={['column' ]}>
              <Checkbox value='bags'>Bags</Checkbox>
              <Checkbox value='electronics'>Electronics</Checkbox>
              <Checkbox value='jewellery'>Jewellery</Checkbox>
              <Checkbox value="men's clothing">Men's clothing</Checkbox>
              <Checkbox value="women's clothing">Women's clothing</Checkbox>
            </Stack>
        </CheckboxGroup>  

        <Heading>Sort</Heading>
        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <Stack spacing={[1, 5]} direction={['column' ]}>
              <Checkbox value='naruto'>Naruto</Checkbox>
              <Checkbox value='sasuke'>Sasuke</Checkbox>
              <Checkbox value='kakashi'>Kakashi</Checkbox>
            </Stack>
        </CheckboxGroup>  
   </Box>
  )
}

export default Filter