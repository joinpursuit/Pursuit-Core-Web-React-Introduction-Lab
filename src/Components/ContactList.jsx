import React from 'react';
import './ContactList.css';

import ContactUserCard from './ContactUserCard';

class ContactList extends React.Component {
    render() {
        return (
            <div className='ContactList'>
                <h2>Contacts</h2>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </div>
        );
    }
}

export default ContactList;