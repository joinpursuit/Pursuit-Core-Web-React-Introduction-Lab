import React from "react";

const contact = {
    name: "Jordan Walke",
    occupation: "React Creator",
    notes: "Lorem Ipsem"
};

function ContactUserCard(){
    return (<div>
        {contact.name}
        {contact.occupation}
        {contact.notes}
    </div>)
}
export default ContactUserCard;