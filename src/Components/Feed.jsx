import React from 'react';
import Posts from './Posts';
import './Feed.css';

class Feed extends React.Component {
  render() {
    return(
      <div id="post">
     <div>
        <h2>Posts</h2>
      </div>
      <div className="allPosts">
        <Posts/>
        </div>
        <br/>
        <div className="allPosts">
        <Posts/>
        </div>
        <br/>
        <div className="allPosts">
        <Posts/>
      </div>
        <br/>
      </div>
    )
  }
}

export default Feed;