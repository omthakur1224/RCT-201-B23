//Write the API calling functions and action creator functions here

import axios from "axios"
import { ADD_POST, APP_ERROR, APP_LOADING, GET_POSTS, HANDLE_PAGE_CHANGE } from "./actionTypes"

export const getPosts=()=>async(dispatch)=>{
 dispatch({type:APP_LOADING})
    try{
        await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`)
        .then(res=>dispatch({type:GET_POSTS,payload:res.data}))
    }catch(err){
        dispatch({type:APP_ERROR})
    }
}
export const addPost=(post)=>async(dispatch)=>{
    dispatch({type:APP_LOADING})
    try{
        await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`,post)
        .then(res=>dispatch({type:ADD_POST,payload:post}))
    }catch(err){
        dispatch({type:APP_ERROR})
    }
}
export const deletePost=()=>(dispatch)=>{

    dispatch({type:APP_LOADING})
    try{

    }catch(err){
        dispatch({type:APP_ERROR})
    }
}
export const updatePage=(newPage)=>(dispatch)=>{

    dispatch({type:APP_LOADING})
    try{
        dispatch({type:HANDLE_PAGE_CHANGE,payload:newPage})
    }catch(err){
        dispatch({type:APP_ERROR})
    }
}