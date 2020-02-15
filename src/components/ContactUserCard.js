import React from 'react';

const ContactUserCard = ({ name, title, caption }) => {
    console.log(name)
    console.log(title)
    console.log(caption)
    return(
        <div className={"contactCard"}>
            Name: {name},
            Title: {title},
            Caption: {caption}
        </div>
    )
}

export default ContactUserCard;