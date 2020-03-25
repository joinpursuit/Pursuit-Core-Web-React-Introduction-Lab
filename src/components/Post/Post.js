import React from 'react';
import './Post.css'

class Post extends React.Component{
    render(){
    const posts = [
        {title: "React Creator", description: "React is the best library JS has" },
        {title: "Pursuit Student", description: "Own your Pursuit" },
        {title: "Gotham Crusader", description: "I miss my parents" }
    ]
    let postMap = posts.map(post =>{
        return(
            <>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            </>
        )
    });

    return <div>{postMap}</div>


}
}

export default Post;