import React from 'react';

import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import './Feed.css';

class Feed extends React.Component {
    render() {
        return (
            <div className="feed">
                <h2> Posts </h2>
                <Post1 />
                <Post2 />
                <Post3 />
            </div>
        )
    }
}

export default Feed;