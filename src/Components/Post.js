import React from 'react';

const postInfo = {
  title: "Title",
  description: "Lorem Ipsem"
};

const Post = () => {
  return (
    <div className='Post'>
      <p>{postInfo.title}</p>                
      <p>{postInfo.description}</p>
    </div>
  )        
}

export default Post;