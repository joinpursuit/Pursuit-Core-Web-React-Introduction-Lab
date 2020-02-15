import React from 'react'
import ContactList from './ContactList';
class UserProfile extends React.Component {
  render(){
    return(
      <div className='user'>
        <ContactList/>
      </div>
    )
  }
}
export default UserProfile;