import React from 'react';
import './Post.css'

class Post extends React.Component{
    postInfo = {
        title: "Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."
    }
    render(){
        return(
            <div >
                <div className='Post'>
                <h2> { this.postInfo.title} </h2>
                <p>  { this.postInfo.body }</p>
                </div>
            </div>
        )
    }
}

export default Post;
