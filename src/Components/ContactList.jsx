import React from 'react';

import Contacts from './Contacts'
class ContactList extends React.Component {
    render() {
        return (
            <div className='contact-user-card'>
                <ul>
                    <Contacts/>
                    <Contacts/>
                    <Contacts/>

                </ul>
            </div>
        )
    }
}

export default ContactList;