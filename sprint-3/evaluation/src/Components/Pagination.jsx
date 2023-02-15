import React from "react";
import "./CSS Files/Pagination.css";

const Pagination = () => {
 let arr=[1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="paginationWrapper" data-testid='paginationWrapper'>
        <button
          className="prevBtn"
          data-testid='prevBtn'
        >
          Prev
        </button>
      
      {/* render the buttons here, directly. Ensure, each button has the "data-testid='btn'" prop. Add the className, activeBtn, if the current button is the activePage*/}
    {
      arr.map((item,)=>
        <button data-testid='btn' key={item} onClick={""}>{item}</button>
      )
    }
        <button
          className="nextBtn"
          data-testid='nextBtn'
        >
          Next
        </button>
      
    </div>
  );
};

export default Pagination;
