import React from 'react';
import './UserProfile.css';
import Posts from './Posts.jsx'
import Contacts from './Contacts.jsx'

class UserProfile extends React.Component {
 UserInfo = {
        userImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'Jordan Walke',
        title: 'React Creator', 
        description: 'Lorem Ipsem'
    }

render(){
    return(
        <div className = 'containter'>
            <div className = 'userProfile'>
             <img src = {this.UserInfo.userImage}></img>
            <div className = 'content'>
                <h1>{this.UserInfo.name}</h1>
                <h3>{this.UserInfo.title}</h3>
                <p>{this.UserInfo.description}</p>
            </div>
        </div>

        <Posts />
        <Contacts />
        </div>
      
    )
}

}

export default UserProfile;