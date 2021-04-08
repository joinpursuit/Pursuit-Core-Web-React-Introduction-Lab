import React from 'react';
import './ContactUserCard.css'
import icon from './profile-icon.jpeg'



const ContactUserCard = () => {
    return (
        <>
        <img src={icon} className="icon" alt="icon"/>
        <h4>Jordan Walke</h4>
        <h5>React Creator</h5>
        <p>Lorem Ipsem</p>

        </>
      )
}

export default ContactUserCard;