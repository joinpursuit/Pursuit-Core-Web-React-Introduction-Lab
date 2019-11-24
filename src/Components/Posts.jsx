import React from 'react';

class Post extends React.Component {
    constructor() {
        super();
        this.post = {
            title: "Title",
            description: "Description"
        }
    }

    render() {
        return (
            <div className="post">
                <h3>{this.post.title}</h3>
                <p>{this.post.description}</p>
            </div>
        )
    }
}

export default Post;