import React from 'react';
import FeedPost from './feedPost';
import './feedPost.css';

class Feed extends React.Component {
    render() {
        return (
        <div>
            <FeedPost />
            <FeedPost />
            <FeedPost />
        </div>
        )
    }
}

export default Feed;