import React from 'react';
import './Feed.css';
import Post from "./Post";

class Feed extends React.Component {
    render() {
        return(
            <div className="feed">
                <h3>Posts</h3>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}

export default Feed;