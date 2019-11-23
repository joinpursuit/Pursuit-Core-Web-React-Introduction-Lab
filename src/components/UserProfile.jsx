import React from "react";
import "../styles/UserProfile.css";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="user-card">
        <img
          className="user-img"
          src="https://i.pinimg.com/originals/77/af/3c/77af3ceb18598a049a8ff38c1448a325.jpg"
          alt=""
        />
        <p className="user-name">Kobe Bryant</p>
        <p className="user-title">GOAT</p>
        <p className="user-description">The best to ever do it.</p>
      </div>
    );
  }
}

export default UserProfile;
