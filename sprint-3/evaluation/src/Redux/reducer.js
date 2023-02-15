import { ADD_POST, GET_POSTS } from "./actionTypes";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  activePage: 1,
  perPage: 5,
};

const reducer = (state=initialState,{type,payload}) => {

  switch(type){
    case GET_POSTS:
      return {
          ...state,
          posts:payload,
          isLoading:false,
      }
    case ADD_POST:
      return{
        ...state,
        posts:[...state.posts,payload],
        isLoading:false
      }
    default:
      return state
  }
    
}
export { reducer };
