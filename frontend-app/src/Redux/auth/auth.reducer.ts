
import { Product } from '../../utils/types';
import { AppAction } from './auth.action';
import * as types from './auth.actiontypes';

export interface AppState{
    isAuth:boolean,
    token:string,
    isLoading:boolean,
    isError:boolean
}

let initState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false,
}
 const authReducer=(state:AppState=initState, action:AppAction):AppState=>{
//    let {type}=action;
      switch(action.type){
        
        case types.GET_AUTH_SUCCESS:
            return {
                ...state,
                 token:action.payload,
                 isLoading:false,
                 isAuth:true
            }
            case types.GET_AUTH_FAILURE:
                return {
                    ...state,
                     isLoading:false,
                     isError:true
                }
                case types.GET_AUTH_REQUEST:
                    return {
                        ...state,
                        isLoading:true,
                    }
                default:
                    return(state)
                    
    }
}

export {authReducer}