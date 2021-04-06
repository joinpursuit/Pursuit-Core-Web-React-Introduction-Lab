import React from "react"

const postInfo = {
title : "Title",
description : "Lorem Ipsem"
}

const Post = () => {
return (
   <div>
  {postInfo.title}
  {postInfo.description}
   </div> 
)
}

export default Post;