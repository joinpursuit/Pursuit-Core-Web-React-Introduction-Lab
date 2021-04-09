import React from 'react';
import './ContactUserCard.css'
import icon from './profile-icon.jpeg'



const ContactUserCard = () => {
    return (
        <div className='usercard'>
        <img src={icon} className="icon" alt="icon"/>
        <h4>Jordan Walke</h4>
        <h5>React Creator</h5>
        <p>Lorem Ipsem</p>

        </div>
      )
}

export default ContactUserCard;