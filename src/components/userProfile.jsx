import React from "react";
import "./userProfile.css";
import UserInfo from "./userInfo";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="userProfile">
        <UserInfo />
      </div>
    );
  }
}

export default UserProfile;
