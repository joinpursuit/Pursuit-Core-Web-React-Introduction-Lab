import React from "react";
import icon from './profile-icon.jpeg'
// import "./index.css";

const UserProfile = () => {
  return (
    <>
      <img src={icon} className="icon" alt="icon" />
      <h4>Jordan Walke</h4>
      <h5>React Creator</h5>
      <p>Lorem Ipsem</p>
    </>
  );
};

export default UserProfile;
