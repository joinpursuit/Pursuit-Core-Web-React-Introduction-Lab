/*
Joseph P. Pasaoa
Single Post Component | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
    // css
import '../../Styles/Sitewide.css';
import '../../Styles/Post.css';
    // helpers
// const { log, data } = require('../helpers.js');


/* COMPONENT */
class Post extends React.Component {
  render() {
    return (
          <div className="postcard">
            <div className="post-title">Title</div>
            <div className="post-body">Lorem ipsum dolor sit amet</div>
          </div>
    )
  }
}


export default Post;
