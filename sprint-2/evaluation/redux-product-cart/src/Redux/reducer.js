import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
  };
  
export const reducer = (state = initialState,{type,payload}) => {

  switch(type){
      case GET_PRODUCTS_SUCCESS:
        return {
            ...state,
            products:payload,
            isLoading:false
        }
        case GET_PRODUCTS_REQUEST:
          return {
              ...state,
              isLoading:payload
          }
          case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isError:payload,
                isLoading:false
            }
            case ADD_PRODUCT_SUCCESS:
        return {
            ...state,
            products:[...state.products,payload],
            isLoading:false
        }
        case ADD_PRODUCT_REQUEST:
          return {
              ...state,
              isLoading:payload
          }
          case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                isError:payload,
                isLoading:false
            }
          case DELETE_PRODUCT_SUCCESS:
            let filterData=state.products.filter((item)=>item.id!==payload)
            return {
              state,
              products:filterData,
              isLoading:false
            }
            case EDIT_PRODUCT_SUCCESS:
              let newData=state.products.filter((item)=>item.id!==payload.id)
              newData=[...newData,payload]
              return {
                ...state,
                products:newData
              }

      default:
        return state;
  }
};
  