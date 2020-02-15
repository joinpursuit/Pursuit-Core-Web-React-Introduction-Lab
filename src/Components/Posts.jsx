import React from 'react';
import UserProfile from './User_profile'
import './Posts.css'

class Post extends React.Component {
  constructor() {
    super();
    this.info ={
      title: 'Title',
      description: 'Description'
    }
  }

  render(){
    return(
      <div>
        <h3>{this.info.title}</h3>
        <p>{this.info.description}</p>
      </div>
    )
  }
}

export default Posts;