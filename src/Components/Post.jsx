import React from 'react';
import "./Post.css";

class Post extends React.Component {
    post = {
        title: "Title",
        des: "Lorem Ipsum"
    }
    render() {
        return(
            <div className="post">
                <h4>{this.post.title}</h4>
                <p>{this.post.des}</p>              
            </div>
        )
    }
}

export default Post;
