import React from "react";
import Posts from "./posts";
import "./userPosts.css";

class UserPosts extends React.Component {
  render() {
    return (
      <div className="userPosts">
        <Posts />
        <Posts />
        <Posts />
      </div>
    );
  }
}

export default UserPosts;
