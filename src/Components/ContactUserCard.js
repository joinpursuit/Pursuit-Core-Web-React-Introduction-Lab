import React from "react";

const contactObj = {
    name: "Jordan Walke",
    occupation: "React Creator",
    notes: "Lorem Ipsem"
}
const ContactUserCard = () => {
    return (
        <div>
            {contactObj.name}
            {contactObj.occupation}
            {contactObj.notes}
        </div>
    )
}
export default ContactUserCard