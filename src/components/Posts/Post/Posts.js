import React from 'react';
import Post from "./Post";
import '../../../master/posts.css'

class Posts extends React.Component {
  state = {
      post: [
          {title: "Title", body: "Loren Ipsum"},
          {title: "Title", body: "Loren Ipsum"},
          {title: "Title", body: "Loren Ipsum"}
        ]
  } 
  showPosts = () => {
      return this.state.post.map(post => {
          return <Post post={post} />;
      })
  }
  render() {
      return <section className="posts">
          {this.showPosts}
          <br></br>
      </section>
  }
};

export default Posts;