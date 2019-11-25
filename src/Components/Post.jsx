import React from 'react';
import './Post.css';

class Post extends React.Component {
    post = {
        title: 'Title',
        text: 'Post Content'
    }
    render() {
        return (
            <div className='Post'>
                <h4>{this.post.title}</h4>
                <p>{this.post.text}</p>
            </div>
        )
    }
}

export default Post;