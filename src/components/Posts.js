import React from "react";
import "../master/Posts.css";
import Post from "./Post";
class Posts extends React.Component {
  state = {
    posts: [
      { title: "Title", body: "Leorem Ipsem" },
      { title: "Title", body: "Leorem Ipsem" },
      { title: "Title", body: "Leorem Ipsem" }
    ]
  };
  displayPosts = () => {
    return this.state.posts.map(post => {
      return <Post post={post} />;
    });
  };
  render() {
    return (
      <div className="Posts">
        {this.displayPosts()}
        <br></br>
      </div>
    );
  }
}

export default Posts;
