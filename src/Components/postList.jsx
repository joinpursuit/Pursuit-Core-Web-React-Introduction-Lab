import React from 'react';
import Post from './Posts'

class PostList extends React.Component {
    render () {
        return (
            <ul>
            <h3>Posts</h3>
            <Post />
            <Post />
            <Post />
            </ul>
        )
    }
}

export default PostList;