//Write the API calling functions here;
import axios from 'axios';
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, EDIT_PRODUCT_SUCCESS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './actionTypes';
import { GET_PRODUCTS_FAILURE } from './actionTypes';
import { EDIT_PRODUCT_REQUEST } from './actionTypes';


export const getProducts=()=>async(dispatch)=>{
     dispatch({type:GET_PRODUCTS_REQUEST,payload:true});
     try{
        await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
        .then((res)=>{
            console.log(res,"res.data in action get")
            return dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
        })
     }catch(err){
        dispatch({type:GET_PRODUCTS_FAILURE,payload:true})
     }
}
export const addProduct=(product)=>async(dispatch)=>{
    dispatch({type:ADD_PRODUCT_REQUEST,payload:true});
    try{
       await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,product)
       .then((res)=>{
           console.log(res.data,"res.data in action add")
           return dispatch({type:ADD_PRODUCT_REQUEST,payload:res.data})
       })
    }catch(err){
       dispatch({type:ADD_PRODUCT_FAILURE,payload:true});
       console.log("adding failure")
    }
}
export const updateProduct=(id,product)=>async(dispatch)=>{
   dispatch({type:EDIT_PRODUCT_REQUEST,payload:true});
   try{
      await axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,product)
      .then((res)=>{
          console.log(res.data,"res.data in action update")
          dispatch({type:EDIT_PRODUCT_SUCCESS,payload:product})
      })
   }catch(err){
      dispatch({type:EDIT_PRODUCT_FAILURE,payload:true});
      console.log("adding failure")
   }
}
export const deleteProduct=(id)=>async(dispatch)=>{
   dispatch({type:DELETE_PRODUCT_REQUEST,payload:true});
   try{
      await axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
      .then((res)=>{
          console.log(res.data,"res.data in action update")
          dispatch({type:DELETE_PRODUCT_SUCCESS,payload:id})
      })
   }catch(err){
      dispatch({type:DELETE_PRODUCT_FAILURE,payload:true});
      console.log("adding failure")
   }
}