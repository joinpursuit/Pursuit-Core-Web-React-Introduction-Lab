import React from "react"



const Posts = ({post})=>{
   post = post.map(post=>{
        return(<div className={"posts"}>
        {post.title}
        <br></br>
        description: {post.description}
        

        </div>)
    })
  

    return(
        <div className="postcontainer">

        <ul>
        <h2>Posts</h2>
            {post}
        </ul>
        </div>
        
    )

}

export default Posts