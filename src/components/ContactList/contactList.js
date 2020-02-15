import React from 'react';
import Contacts from "./contact/contacts"
export default contactList;

const ContactList =({contacts})=>{
    contacts = contacts.map(contact =>{
        return <Contacts name={contact.name} position={contact.position} statement={contact.statement} key={contact.name}/>
    })
    return(
        <div>
            {contacts}
        </div>
    )
}

