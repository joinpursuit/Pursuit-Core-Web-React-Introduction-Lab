import React from "react";
import "../styles/Post.css";
class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <p className="post-title">Title</p>
        <p className="post-body">Lorem Ipsum</p>
      </div>
    );
  }
}

export default Post;
