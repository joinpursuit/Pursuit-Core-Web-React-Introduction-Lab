import React from 'react';
import Contacts from './Contacts';

class ContactList extends React.Component {
    render() {
        return (
            <div>
          <h3>Contacts</h3>
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            </div>
        );
    }
}

export default ContactList;