import React from 'react';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Navbar from './component/Navbar';
import ProductCard from './component/ProductCard';
import { useAppSelector } from './Redux/store';
import { Flex } from '@chakra-ui/react';

function App() {
  const data=useAppSelector((store)=>store.appReducer.data)
  return (
    <div className="App">
      <Navbar/>
        <MainRoutes/>
        <Flex flexWrap={'wrap'}>
              {
                data.length > 0&& data.map((item,index)=>{
                  return <ProductCard key={item.id} {...item}/>
                }
                )
              }
    </Flex>
    </div>
  );
}

export default App;
