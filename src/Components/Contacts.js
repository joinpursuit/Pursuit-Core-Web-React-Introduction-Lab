import React from 'react'
import ContactUserCard from './ContactUserCard'

const Contacts = () => {
    return (
        <div>
            <h3>Contacts</h3>

            <ContactUserCard />
            <ContactUserCard /> 
            <ContactUserCard />
            <ContactUserCard />
        </div>
    )
}

export default Contacts