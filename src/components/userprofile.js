import React from "react";
import "../css/Userprofile.css";

const Userprofile = ({ name, title, body }) => {
  return (
    <div className="profile">
      <div className="pic">
        <img
          className="userProfileImg"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile-pic"
        ></img>
      </div>
      <div id="info">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default Userprofile;
