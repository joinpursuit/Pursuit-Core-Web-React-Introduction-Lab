import React from 'react';

const ContactCard = {
    Name: 'Jordan Walke',
    Title: 'React Creator',
    Description:'Lorem Ipsem'
}

const ContactUserCard = () => {
    return (
        <aside>
            {ContactCard.Name}
            {ContactCard.Title}
            {ContactCard.Description}
        </aside>

    )
}

export default ContactUserCard;