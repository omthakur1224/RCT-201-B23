import React,{useState} from "react";
import "./CSS Files/AddPost.css";
import { useDispatch } from 'react-redux';
import { addPost } from "../Redux/action";

export const AddPost = () => {

  const [text,setText]=useState("")
 const dispatch=useDispatch()

  return (
    <div className="addPostWrapper">
      <textarea
        className="addPostTextArea"
        cols="40"
        rows="3"
        maxLength="50"
        placeholder="What's happening?"
        data-testid='addTextArea'
        value={text}
        onChange={(e)=>setText(e.target.value)}
      ></textarea>
      <div className="addPostBtnWrapper">
        <button data-testid='addPostBtn' className="addPostBtn" onClick={()=>{
          dispatch(addPost({"title":text,"liked":false}));
          setText("")
        }
        } >
          Tweet
        </button>
      </div>
    </div>
  );
};
