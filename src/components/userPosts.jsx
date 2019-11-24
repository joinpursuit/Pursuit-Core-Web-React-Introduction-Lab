import React from "react";
import Posts from "./posts";
import "./userPosts.css";

class UserPosts extends React.Component {
  render() {
    return (
      <div className="userPosts">
        <h2>Posts</h2>
        <Posts />
        <Posts />
        <Posts />
      </div>
    );
  }
}

export default UserPosts;
