import React from 'react';
import '../../../master/post.css'
// import Posts from "./Posts";

// class Post extends React.Component {
//     render() {
//         return (
//             <>
//             <h3>Posts</h3>
//             <Posts />
//             <Posts />
//             <Posts />
//             </>
//         )
//     }
// };

const Post = ({ post }) => {
    return (
      <section className="post">
        {post.title}
        {post.body}
      </section>
    );
  };

export default Post;