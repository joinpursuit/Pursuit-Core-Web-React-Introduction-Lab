import React from 'react';

class Posts extends React.Component {

    postInfo = {
        title: "Pizza Bits",
        description: "Goes in the mouth and you eat it. Yum!"
    }

render() {
    return(
        <div className='posts'>
            <h2>Posts</h2>
                <h4>{this.postInfo.title}</h4>
                <p>{this.postInfo.description}</p>
        </div>
        )
    }
}

export default Posts;