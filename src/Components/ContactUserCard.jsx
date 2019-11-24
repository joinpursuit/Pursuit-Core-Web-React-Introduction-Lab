import React from 'react';
import './ContactUserCard.css'


class ContactUserCard extends React.Component{
    render(){
        return(
            <div id = "contacts">
                <div>
              <img id="contactProfileImg" src="https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png"></img>
                </div>
                <div id="profileInfo">
                <h1>Jordan Walke</h1>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
                </div>
            </div>           
        )
    }
}

export default ContactUserCard