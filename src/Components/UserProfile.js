import React from "react";
import yes from "./assets/yes.png";

const UserProfile = () => {
  return (
    <div className="user">
      <div className="userimg">
        <img src={yes} alt="" />
      </div>

      <div className="userinfo">
        <h3 className="margin">Jordan Walke</h3>
        <h4 className="margin">React Creator</h4>
        <p className="margin">Lorem Ipsem</p>
      </div>
    </div>
  );
};
export default UserProfile;
