/*
Joseph P. Pasaoa
Posts Component | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
import Post from './Post';
    // css
// import '../../Styles/Sitewide.css';
import './Posts.css';
    // helpers
// const { log, data } = require('../utils/helpers.js');


/* COMPONENT */
class Posts extends React.Component {
  render() {
    return (
      <div className="comp-container" id="comp-posts">
        <div className="comp" id="posts">
          <h2>Posts</h2>
          <div id="all-posts">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    )
  }
}


export default Posts;
