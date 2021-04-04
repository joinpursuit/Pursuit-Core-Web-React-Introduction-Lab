import React from 'react';

const postInfo = {
  title: "Title",
  description: "Lorem Ipsem"
};

class Post extends React.Component {
  render() {
    return (
      <div className='Post'>
        <p>{postInfo.title}</p>                
        <p>{postInfo.description}</p>
      </div>
    )  
  }
}

// const Post = () => {
//   return (
//     <div className='Post'>
//       <p>{postInfo.title}</p>                
//       <p>{postInfo.description}</p>
//     </div>
//   )        
// }

export default Post;