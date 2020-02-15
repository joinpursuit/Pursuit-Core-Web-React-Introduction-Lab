import React from "react"

const divStyle = {
    color: 'green',
    border: "solid",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black'
}

const Posts = ({post})=>{
   post = post.map(post=>{
        return(<div className={"posts"} style ={divStyle}>
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