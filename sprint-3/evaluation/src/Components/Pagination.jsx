import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./CSS Files/Pagination.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updatePage } from "../Redux/action";

const Pagination = () => {
 
 const [searchParams, setSearchParams] = useSearchParams();

 const {activePage,perPage}=useSelector(store=>store);

const dispatch=useDispatch();

 const handlePage=(newPage)=>{
     dispatch(updatePage(newPage))
 }

 useEffect(()=>{
  let params={};
  if(activePage!=1){

    params.page=activePage;
  }
  setSearchParams(params)
 },[activePage])

  return (
    <div className="paginationWrapper" data-testid='paginationWrapper'>

       {activePage>1&&<button
          onClick={()=>handlePage(activePage-1)}
          className="prevBtn"
          data-testid='prevBtn'
        >
          Prev
        </button>}
      
      {/* render the buttons here, directly. Ensure, each button has the "data-testid='btn'" prop. Add the className, activeBtn, if the current button is the activePage*/}
    {
      Array(10).fill(0).map((item,index)=>
        <button data-testid='btn' 
        key={index+1} 
        className={index+1==activePage?"activeBtn":""}
        onClick={()=>handlePage(index+1)}
        >{index+1}</button>
      )
    }
        {activePage<10&&<button
          onClick={()=>handlePage(activePage+1)}
          className="nextBtn"
          data-testid='nextBtn'
        >
          Next
        </button>}
      
    </div>
  );
};

export default Pagination;
