import React from 'react';
import ContactCard from './ContactCard'
import '../CSS/ContactList.css';

const ContactList = (userContact) => {
    return (
        <div className={"ContactListContainer"}>
            <ContactCard name={userContact.name} title={userContact.title} bio={userContact.bio}/>
        </div>
    )
}

export default ContactList