import React from "react";
import Post from './Post'
import './Posts.css'

// import "./index.css";

const Posts = () => {
  return <div className='posts'>
  <h2>Posts</h2>
  <Post />
  <Post />
  <Post />
 
  </div>
}

export default Posts;