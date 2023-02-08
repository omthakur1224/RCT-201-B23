import { GetAPI } from '../../utils/app.api';
import { Product } from '../../utils/types';
import { APP_DISPATCH } from '../store';
import * as types from './app.actiontypes';


export interface IproductRequest{
    type:typeof types.GET_PRODUCT_REQUEST;
   
}
export interface IproductSuccess{
    type:typeof types.GET_PRODUCT_SUCCESS;
    payload: Product[]
}
export interface IproductError{
    type:typeof types.GET_PRODUCT_FAILURE;
   
}

//type of action
export type AppAction= IproductRequest | IproductError|IproductSuccess;

const productRequest=():IproductRequest=>{

    return{type:types.GET_PRODUCT_REQUEST }

}
const productError=():IproductError=>{

    return{type:types.GET_PRODUCT_FAILURE}

}
const productSuccess=(data :Product[]):IproductSuccess=>{

    return{type:types.GET_PRODUCT_SUCCESS, payload:data}
}


export const getProducts=()=>async(dispatch:APP_DISPATCH)=>{

    productRequest();

    try{
        let data=await GetAPI();
        if(data){
            productSuccess(data)
        }
    }
    catch(err){
        console.log("error from getProducts",err)
        dispatch(productError())
    }
}