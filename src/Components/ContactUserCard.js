import React from "react"

const ContactInfo = {
    name : "Jordan Walke",
    occupation : "React Creator",
    description : "Lorem Ipsem"
}

const ContactUserCard = () => {
    return (
        <div>
            {ContactInfo.name}
            {ContactInfo.occupation}    
            {ContactInfo.description}

        </div>
    )
}

export default ContactUserCard