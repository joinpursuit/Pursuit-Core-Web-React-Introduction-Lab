import React from 'react';
import './Feed.css';

import Post from './Post';

class Feed extends React.Component {
    render() {
        return (
            <div className='Feed'>
                <h2>Posts</h2>
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}

export default Feed;