import React from 'react'

const allPost = {
    title: 'Title',
    description: 'Lorem Ipsem'
}

const Post = () => {
    return (
        <div className='Post'>
            {allPost.title}
            {allPost.description}
        </div>
    )
}

export default Post