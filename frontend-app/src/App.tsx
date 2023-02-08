import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Navbar from './component/Navbar';
import ProductCard from './component/ProductCard';
import { useAppSelector } from './Redux/store';
import { getProducts } from './Redux/app/app.action';

function App() {
  const products=useAppSelector((store)=>store.AppReducer.data)
  return (
    <div className="App">
      <Navbar/>
        <MainRoutes/>
      <ProductCard/>
    </div>
  );
}

export default App;
