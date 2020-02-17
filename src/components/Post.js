import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.title}
      {post.body}
    </div>
  );
};

export default Post;
