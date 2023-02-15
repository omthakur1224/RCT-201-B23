import { ADD_POST, GET_POSTS, HANDLE_PAGE_CHANGE, TOGGLE_LIKE } from "./actionTypes";

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
    case HANDLE_PAGE_CHANGE:
      return{
        ...state,
        activePage:payload,
        isLoading:false
      }
    case TOGGLE_LIKE:
      let filterData=state.posts.map((item,index)=>{
        if(item.id==payload.id)
        return payload
        return item;
      })
      console.log('data after filter',filterData)
      return {
        ...state,
         posts:filterData
      }
    default:
      return state
  }
    
}
export { reducer };
