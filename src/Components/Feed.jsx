import React from 'react';
import Posts from './Posts';
import './feed.css';

class Feed extends React.Component {
  render() {
    return(
      <div class="post">
     
        <Posts/>
      
        <Posts/>
      
        <Posts/>
      
      </div>
    )
  }
}

export default Feed;