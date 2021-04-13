import React from "react";

const contactUserCardInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    description: "Lorem Ipsem"

};

const ContactUserCard = () => {
    return (
        <div>
            <p>{contactUserCardInfo.name}</p>
            <p>{contactUserCardInfo.title}</p>
            <p>{contactUserCardInfo.description}</p>
        </div>
    )
}

export default ContactUserCard;