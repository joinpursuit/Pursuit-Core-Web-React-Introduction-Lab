import React from 'react'
import ContactCard from './Posts'
import './User_profile.css'
import Contact_list from './Contact_list';
class User_profile extends React.Component {
  render(){
    return(
      <div id='user'>
        <Contact_list/>
      </div>
    )
  }
}
export default User_profile;