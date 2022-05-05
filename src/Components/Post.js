import React from "react";

const postObj = {
    title: "Title",
    notes: "Lorem Ipsem"
}

const Post = () => {
    return (
        <div>
            {postObj.title}
            {postObj.notes}
        </div>
    )
}
export default Post