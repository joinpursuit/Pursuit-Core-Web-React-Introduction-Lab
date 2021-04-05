import React from "react";
import "./Post.css";

// const Post = () => {
//   return (
//     <div className="Post">
//       <h4>Title</h4>
//       <p>Lorem Ipsem</p>
//     </div>
//   );
// };


//Refactoring Above Code
class Post extends React.Component {
  constructor() {
    super()
  }
  render(){
    return (
      <div className="Post">
        <h4>Title</h4>
        <p>Lorem Ipsem</p>
      </div>
    );
  }
}

export default Post;
