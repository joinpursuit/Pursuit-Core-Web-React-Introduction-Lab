import React from 'react';
import ContactUserCard from './ContactUserCard.js';

const Contacts = () => {
  return (
    <div className='Contacts-Div'>
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  )
}

export default Contacts;