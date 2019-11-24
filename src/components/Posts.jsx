/*
Joseph P. Pasaoa
Posts Component | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
import Post from './Post';
    // css
import '../../Styles/Sitewide.css';
import '../../Styles/Posts.css';
    // helpers
// const { log, data } = require('../helpers.js');


/* COMPONENT */
class Posts extends React.Component {
  render() {
    return (
      <div className="comp-container">
        <div className="comp" id="posts">
          <h2>Posts</h2>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    )
  }
}


export default Posts;
