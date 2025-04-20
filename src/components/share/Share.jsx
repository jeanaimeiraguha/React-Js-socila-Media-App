import React from "react";
import "./Share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="shareProfileImg"
        />
        <input
          placeholder="What's on your mind?"
          className="shareInput"
        />
      </div>
    </div>
  );
};

export default Share;
