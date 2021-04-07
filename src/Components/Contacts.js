import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = () =>{
    return(
        <aside>
            <h1>Contacts</h1>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </aside>
    )
}

export default Contacts;