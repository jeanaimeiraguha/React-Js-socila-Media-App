import React from "react";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <img src="/assets/2.PNG" alt="" className="rightbarProfileImg" />
            <span className="rightbarUsername">Jean Aime</span>
          </li>
          <li className="rightbarFriend">
            <img src="/assets/3.PNG" alt="" className="rightbarProfileImg" />
            <span className="rightbarUsername">Frank Masezerano</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
