import React from 'react'
import Post from './Post'

const posts = {
  width: '100%',
  height: '55%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  border: '2px solid black',
  textAlign: 'center'
}

// Function component
const Posts = () => {
  return (
    <div style={posts}>
      <h3 style={{ margin: '0 0 0 0' }}>Posts</h3>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts
