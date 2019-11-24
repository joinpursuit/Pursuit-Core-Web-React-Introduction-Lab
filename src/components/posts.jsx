import React from 'react';

class Post extends React.Component {
    post = {
        title: "Title",
        description :"Lorem Ipsem"
    }
    render() {
        return (
            <div class="post_box">
                <h4> {this.post.title} </h4>
                <p> {this.post.description}</p>
            </div>
        )
    }
}
export default Post;