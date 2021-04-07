import React from 'react'

const post = {
  border: '1px solid black',
  width: '90%',
  height: '60px',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center'
}

const element = {
  margin: '0 0 0 0',
  padding: '5px'
}

// Function component
const Post = () => {
  return (
    <div style={post}>
      <h4 style={element}>Title</h4>
      <p style={element}>Lorem Ipsem</p>
    </div>
  )
}

export default Post
