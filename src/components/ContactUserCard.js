import React from 'react';

const ContactUserCard = ({ name, title, caption, image }) => {
    return(
        <div className={"contactCard"}>
            Name: {name},
            Title: {title},
            Caption: {caption},
            Image: {image}
        </div>
    )
}

export default ContactUserCard;