import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = ({ contactList }) => {
    contactList = contactList.map(contact => {
        return <ContactUserCard name={contact.name} title={contact.title} caption={contact.caption} image={contact.image} key={contact.name} />
    })
    return(
       <ul>
           {contactList}
       </ul>
    )
}

export default Contacts;