import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postTop">
        <img src={post.profilePicture} alt="" className="postProfileImg" />
        <div>
          <span className="postUsername">{post.username}</span>
          <span className="postDate">{post.date}</span>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.content}</span>
        {post.photo && <img src={post.photo} alt="" className="postImg" />}
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">👍 {post.likes} Likes</div>
        <div className="postBottomRight">{post.comments} Comments</div>
      </div>
    </div>
  );
};

export default Post;
