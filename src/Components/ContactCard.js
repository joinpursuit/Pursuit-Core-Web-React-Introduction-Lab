import React from 'react';

//need to iterate through user contact list here

const ContactCard = (contact) => {
    return (
        <>
            <div className="imageContact">
                <img className ="picture" src ="https://img.icons8.com/cotton/2x/gender-neutral-user--v1.png"></img>
            </div>
            <div className="contact">
                <div name="name"> {contact.name} </div>
                <div name="title"> {contact.title} </div>
                <div name="summary">{contact.bio} </div>
            </div>
        </>
    )
}

export default ContactCard