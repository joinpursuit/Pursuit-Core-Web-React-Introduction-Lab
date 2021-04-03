import React from "react";

const UserProfile = () => {
  return (
    <div className="userProfile">
      <img className="profileImg" src="profile.png"></img>
      <div className="text">
      <h3 className="name">Jordan Walke</h3>
      <h4 className="position">React Creator</h4>
      <p className="lorem">Lorem Ipsem</p>
      </div>
    </div>
  );
};

export default UserProfile;
