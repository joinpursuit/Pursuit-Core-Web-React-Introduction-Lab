import React from "react";

const postInfo = {
  title: "Title",
  content: "Lorem Ipsem",
};

const Post = () => {
  return (
    <div>
      <h2>{postInfo.title}</h2>
      <p>{postInfo.content}</p>
    </div>
  );
};

export default Post;
