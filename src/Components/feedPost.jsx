import React from 'react';
import './feedPost.css';

class FeedPost extends React.Component {
    constructor () {
        super() 
            this.post = {
                title: 'Title',
                body: 'Body of post'
            }
    }
    render() {
        return (
            <div> 
                <h4>{this.post.title}</h4>
                <p>{this.post.body}</p>
            </div>
        )
    }
}

export default FeedPost;