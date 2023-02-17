import React,{useEffect} from 'react'
import { useAppDispatch } from '../Redux/store'
import { useAppSelector } from './../Redux/store';
import { getProducts } from './../Redux/app/app.action';
import { Box, Flex } from '@chakra-ui/react';
import ProductCard from '../component/ProductCard';
import Filter from '../component/Filter';
import { useLocation, useSearchParams } from 'react-router-dom';

const Homepage = () => {

  const dispatch= useAppDispatch();
  const data=useAppSelector(store=>store.appReducer.data);
  const [searchParams]=useSearchParams();

  const location=useLocation();

  useEffect(()=>{
    if(data.length===0||location){
      let getProductParams={
        params:{
          category:searchParams.getAll('filter')
        }
      }
      dispatch(getProducts())
    }

  },[location.search])
  return (
    <div>
      <Flex>
        <Box minW={300}>
            <Filter/>
        </Box>
          <Flex flexWrap={'wrap'}>
            {data.length > 0&& data.map((item,index)=>{
              return <ProductCard key={item.id} {...item}/>
              })}
          </Flex>
      </Flex>
</div>
  )
}

export default Homepage