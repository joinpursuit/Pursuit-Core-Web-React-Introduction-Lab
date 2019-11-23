import React from 'react';
import Posts from './Posts';
import Contacts from './Contacts';

import './UserProfile.css';


class UserProfile extends React.Component {
    constructor(){
        super()
        this.post ={
            user: "Jordan Walke",
            image: "data:image/png;base64,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",
            occupation: "React Creator",
            bio: "Lorem Ipsem"
        }
    }

    render() {
        return (
            <div className="container">
                
            <div className="left">
            
            <div className="profile">
                <img src={this.post.image}/>
                
                <div className="profile-text">
                <h5>{this.post.user}</h5>
                <h6>{this.post.occupation}</h6>
                <p>{this.post.bio}</p>
                </div>
            </div>
           
            <div className="posts"> 
                <h1>Posts</h1>
                <Posts/>
                <Posts/>
                <Posts />
            </div>
            </div>
           
            <div className="right">
            <div className="contacts">
                <h1>Contacts</h1>
                <Contacts />
                <Contacts />
                <Contacts />
                <Contacts />
             </div> 
             </div>
            
            </div>
        )
    }
}

export default UserProfile;