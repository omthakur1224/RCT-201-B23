
import { Product } from './../../utils/types';
import { AppAction } from './app.action';
import * as types from './app.actiontypes';

export interface AppState{
    data:Product[],
    isLoading:boolean,
    isError:boolean
}

let initState={
    data:[],
    isLoading:false,
    isError:false,
}
 const appReducer=(state:AppState=initState, action:AppAction):AppState=>{
//    let {type}=action;
      switch(action.type){
        
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                 data:action.payload,
                 isLoading:false,
            }
            case types.GET_PRODUCT_FAILURE:
                return {
                    ...state,
                     isLoading:false,
                     isError:true
                }
                case types.GET_PRODUCT_REQUEST:
                    return {
                        ...state,
                        isLoading:true,
                    }
                default:
                    return(state)
                    
    }
}

export {appReducer}