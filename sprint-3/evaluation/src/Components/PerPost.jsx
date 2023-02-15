import React from "react";
import "./CSS Files/PerPost.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { toggleLike } from "../Redux/action";
import { useDispatch } from 'react-redux';

const PerPost = (post) => {
const dispatch=useDispatch()
  return (
    <div className="perPostWrapper" data-testid='perPostWrapper'>
      <div className="perPostCard">
        <img src="https://via.placeholder.com/50/3a9f5" alt="profile" />
        <div className="postTitle">{post.title}</div>
      </div>
      <div data-testid='likePostDiv' className="likedIcons">
        {/* Render the icons based on the liked condition */}
        {!(post.liked)?
          <AiOutlineHeart data-testid='notLikedIcon' onClick={()=>dispatch(toggleLike({...post,liked:true}))} />:
          <FcLike data-testid='likedIcon' onClick={()=>dispatch(toggleLike({...post,liked:false}))}/>
        }
      </div>
    </div>
  );
};

export default PerPost;
