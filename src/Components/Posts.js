import React from 'react';
import Post from './Post'

class Posts extends React.Component {
  render() {
    return (
      <div>
        <p>Posts</p>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}

export default Posts