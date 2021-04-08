import React from "react";
import "../App.css"


let contact = {
    name: "Jordan Walke",
    job: "React Creator",
    lorem: "Lorem Ipsem"
}


function ContactUserCard () {
    return (
        <div className="Card">
            <h3>{contact.name}</h3>
            <p>{contact.job}</p>
            <p>{contact.lorem}</p>
        </div>
)
}

export default ContactUserCard;