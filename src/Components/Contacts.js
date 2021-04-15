import React from 'react';
import Cards from './ContactUserCard.js';

const Contacts = () => {
    return (
        <div className='contacts'>
            <h2>Contacts</h2>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    )
}

export default Contacts;