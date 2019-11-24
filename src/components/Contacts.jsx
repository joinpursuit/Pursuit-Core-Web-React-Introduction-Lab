import React from 'react';
import './Contacts.css';

class Contacts extends React.Component{
    UserInfo = {
        userImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: 'Jordan Walke',
        title: 'React Creator', 
        description: 'Lorem Ipsem'
    }

    render() {
        return(
        <div className = 'contacts'>
            <h2>Contacts</h2>
            <div className = 'singleContact'>
                    <img src = {this.UserInfo.userImage}></img>
                <div className = 'content'>
                    <h2>{this.UserInfo.name}</h2>
                    <h4>{this.UserInfo.title}</h4>
                    <p>{this.UserInfo.description}</p>
                </div>
            </div>

            <div className = 'singleContact'>
                    <img src = {this.UserInfo.userImage}></img>
                <div className = 'content'>
                    <h2>{this.UserInfo.name}</h2>
                    <h4>{this.UserInfo.title}</h4>
                    <p>{this.UserInfo.description}</p>
                </div>
            </div>

            <div className = 'singleContact'>
                    <img src = {this.UserInfo.userImage}></img>
                <div className = 'content'>
                    <h2>{this.UserInfo.name}</h2>
                    <h4>{this.UserInfo.title}</h4>
                    <p>{this.UserInfo.description}</p>
                </div>
            </div>

            <div className = 'singleContact'>
                    <img src = {this.UserInfo.userImage}></img>
                <div className = 'content'>
                    <h2>{this.UserInfo.name}</h2>
                    <h4>{this.UserInfo.title}</h4>
                    <p>{this.UserInfo.description}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Contacts;
