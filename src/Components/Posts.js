import React from "react";
import Post from "./Post.js";
import "../styles/posts.css";

// function Posts() {
//   return (
//     <div className="posts">
//       <h2>Posts</h2>
//       <section>
//         <Post />
//         <Post />
//         <Post />
//       </section>
//     </div>
//   );
// }


class Posts extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="posts">
      <h2>Posts</h2>
      <section>
        <Post />
        <Post />
        <Post />
      </section>
    </div>
  )
  }
}
export default Posts;
