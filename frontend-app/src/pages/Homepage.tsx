import React,{useEffect} from 'react'
import { useAppDispatch } from '../Redux/store'
import { useAppSelector } from './../Redux/store';
import { getProducts } from './../Redux/app/app.action';

const Homepage = () => {
  const dispatch= useAppDispatch();
  const data=useAppSelector(store=>store.appReducer.data)
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <div>Homepage</div>
  )
}

export default Homepage