import React from "react";
import icon from './profile-icon.jpeg'
import './UserProfile.css'
// import "./index.css";

const UserProfile = () => {
  return (
    <div className="userprofile">
      <img src={icon} className="icon" alt="icon" />
    <div className="userinfo">
      <h3>Jordan Walke</h3>
      <h4>React Creator</h4>
      <p>Lorem Ipsem</p>
      </div>
    </div>
  );
};

export default UserProfile;
