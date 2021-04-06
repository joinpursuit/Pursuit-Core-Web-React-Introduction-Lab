import React from 'react'
import ContactUserCard from './ContactUserCard'

const contacts = () => {
    return (
        <div>
            <h1>Contacts</h1>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    )
}

export default contacts