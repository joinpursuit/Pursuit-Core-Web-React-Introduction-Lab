import React from 'react';

class Post extends React.Component {

    post = {
        title: 'Random Post',
        description: 'This is a random post'
        
    }
    render() {
        return(
            <div className='post'>
                <p>{this.post.title}</p>
                <p>{this.post.description}</p>
            </div>
        ) 
    }
}

export default Post;