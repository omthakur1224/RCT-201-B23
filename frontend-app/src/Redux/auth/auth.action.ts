import {getAuthApi } from '../../utils/app.api';
import { LoginData } from '../../utils/types';

import { APP_DISPATCH } from '../store';
import * as types from './auth.actiontypes';


export interface IauthRequest{
    type:typeof types.GET_AUTH_REQUEST;
    payload?: boolean;
}
export interface IauthSuccess{
    type:typeof types.GET_AUTH_SUCCESS;
    payload:string;
}
export interface IauthError{
    type:typeof types.GET_AUTH_FAILURE;
    payload?: boolean;
   
}

//type of action
export type AppAction = IauthSuccess |IauthRequest |IauthError;

const authRequest=():IauthRequest=>{

    return{type:types.GET_AUTH_REQUEST };

}
const authError=():IauthError=>{

    return{type:types.GET_AUTH_FAILURE};

}
const authSuccess=(token :string):IauthSuccess=>{

    return{type:types.GET_AUTH_SUCCESS, payload:token}
}


export const getAuth=(creds:LoginData):any=>async(dispatch:APP_DISPATCH)=>{
    dispatch(authRequest());
    try{
        let data=await getAuthApi(creds);
        if(data){
            return dispatch(authSuccess(data))
        }
    }
    catch(err){
        console.log("error from getauths",err)
        dispatch(authError())
    }
}