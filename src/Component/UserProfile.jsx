import React from 'react';
import './UserProfile.css'

class UserProfile extends React.Component{
    userInfo = {
        firstName : "James",
        lastName : "Smith",
        occupation : "React Programer",
        image: "https://picsum.photos/id/1005/5760/3840",
        skill : "lorem ipsum"

    }
    render(){
        return (
            <div className='UserInfo'>
                <img src={ this.userInfo.image} alt='post' width='200' height='150'/>
                <h1>{ this.userInfo.firstName} {this.userInfo.lastName}</h1> 
                <h3>{ this.userInfo.occupation}</h3>
                 <p>{ this.userInfo.skill }</p>
            </div>

        )

        }
}
export default UserProfile;