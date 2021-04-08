import React from "react";
import Contacts from "./Contacts"

let contact = {
    name: "Jordan Walke",
    job: "React Creator",
    lorem: "Lorem Ipsem"
}


function ContactUserCard () {
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>{contact.job}</p>
            <p>{contact.lorem}</p>
        </div>
)
}

export default ContactUserCard;