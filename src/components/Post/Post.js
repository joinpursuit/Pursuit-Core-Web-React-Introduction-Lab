import React from 'react';

// class Post extends React.Component{
//     post = {
//         title: "title",
//         description: "Lorem Ipsem"
//     }  

//     render() {
//         return(
//             <div>
//                 <h4>{this.post.title}</h4>
//                 <p>{this.post.description}</p>
//             </div>
//         )
//     }

// }

const Post = ({title, description}) => {
    return(
        <>
        <div className="post">
            {title}
            <br/>
            {description}
        </div>
        </>
    )
}

export default Post;