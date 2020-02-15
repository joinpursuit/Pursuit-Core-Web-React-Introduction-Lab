import React from "react";

const Post = ({title, description}) => {
  return (
    <div className={"post"}>
      Title: {title}
      <br/>
      Description: {description}
    </div>
  )
}

export default Post;