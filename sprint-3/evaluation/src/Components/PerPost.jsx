import React from "react";
import "./CSS Files/PerPost.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const PerPost = ({id,liked,title}) => {

  return (
    <div className="perPostWrapper" data-testid='perPostWrapper'>
      <div className="perPostCard">
        <img src="https://via.placeholder.com/50/3a9f5" alt="profile" />
        <div className="postTitle">{title}-{id}</div>
      </div>
      <div data-testid='likePostDiv' className="likedIcons">
        {/* Render the icons based on the liked condition */}
        {!liked?
          <AiOutlineHeart data-testid='notLikedIcon' />:
          <FcLike data-testid='likedIcon'/>
        }
      </div>
    </div>
  );
};

export default PerPost;
