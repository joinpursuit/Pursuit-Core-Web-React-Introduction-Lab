import React from 'react';
import './Contact.css'

class ContactUserCard extends React.Component {
    userInfo = {
        image: "https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2027363_1280.png",
        firstName: "Sara",
        lastName : "Jenkins",
        occupation : "Full Stack Developer",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing."
    }
    render(){
        return(
            <div className='ContactUserCard'>
                <img src={ this.userInfo.image} width='150' height='180'/>
                <h3> { this.userInfo.firstName } { this.userInfo.lastName }</h3>
                <h4> { this.userInfo.occupation} </h4>
                <p> { this.userInfo.body}</p>
            </div>
        )
    }
}



export default ContactUserCard;