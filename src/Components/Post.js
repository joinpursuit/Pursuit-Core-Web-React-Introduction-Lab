import React from 'react'

const postInfo = {
  title: "Title",
  description: "Lorem Ipsem"
}

const Post = () => {
  return (
    <div>
      <h1>{postInfo.title}</h1>                
      <p>{postInfo.description}</p>
    </div>
  )        
}

export default Post;