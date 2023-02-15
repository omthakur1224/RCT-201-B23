import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/action";
import "./CSS Files/Post.css";
import PerPost from "./PerPost";

const Posts = () => {
 const posts=useSelector(store=>store.posts);
 const dispatch=useDispatch();
 const {activePage,perPage}=useSelector(store=>store)
 console.log(activePage,perPage,"active,perPage")
 useEffect(()=>{
      dispatch(getPosts())
    },[])

  return (
    <div className="postsWrapper">
      <div style={{ position: "relative" }}>
        <h1 style={{ textAlign: "center" }}>Posts</h1>
      </div>
      {/* map through the posts here, inside the PerPost component. Also, take care of showing the Posts based on the Pagination data */}
      {
        posts&&posts
        .filter((item,index)=>
              item.id>((activePage*perPage)-perPage)&& (item.id<=(activePage*perPage)) )
        .map((post,index)=>
          <PerPost key={index} {...post}/>)
        }
    </div>
  );
};

export default Posts;
