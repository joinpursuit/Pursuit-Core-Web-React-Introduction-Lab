import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    render() {
        return (
            <div className='Posts'>
                <h2>Posts</h2>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}

export default Posts;