import React from 'react';

import Post from './Components/Post'

class PostList extends React.Component {
    render() {
        return(
            <div className='post'>
                <h4>Posts</h4>
                <ul>
                    <Post/>
                    <Post/>
                    <Post/>
                </ul>
            </div>
        )
    }
}

export default PostList