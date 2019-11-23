import React from 'react';

import ContactCard1 from './ContactCard1';
import ContactCard2 from './ContactCard2';
import ContactCard3 from './ContactCard3';
import ContactCard4 from './ContactCard4';
import './Contacts.css';

class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts">
                <h2> Contacts </h2>
                <ContactCard1 />
                <ContactCard2 />
                <ContactCard3 />
                <ContactCard4 />
            </div>
        )
    }
}

export default Contacts;