import React from 'react';


class Posts extends React.Component{
    constructor(){
        super();
        this.post ={
            title: "Title",
            description: "This is the description of the post"
        }
    }
    render() {
        return (
            <div className="post">
                <h2>{this.post.title}</h2>
                <p>{this.post.description}</p>
            </div>
        )
    }
}

export default Posts;