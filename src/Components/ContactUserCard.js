import React from 'react';

const ContactCard = {
    Name: 'Jordan Walke',
    Title: 'React Creator',
    Description:'Lorem Ipsem'
}

const ContactUserCard = () => {
    return (
        <section>
            {ContactCard.Name}
            {ContactCard.Title}
            {ContactCard.Description}
        </section>

    )
}

export default ContactUserCard;