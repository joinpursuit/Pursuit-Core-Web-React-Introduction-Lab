import React from 'react'
import ContactUserCard from './ContactUserCard'
import "../Style/contact.css"
// import UserProfile from './UserProfile'


const Contacts = () => {
    return (
        <div  className="contacts">
            <h3>Contacts</h3>
            <ContactUserCard></ContactUserCard>
            <ContactUserCard></ContactUserCard>
            <ContactUserCard></ContactUserCard>
            <ContactUserCard></ContactUserCard>
        </div>
    )
}

export default Contacts