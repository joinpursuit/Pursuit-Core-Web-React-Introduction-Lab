import React from 'react';

import Contacts from './Contacts'
class ContactList extends React.Component {
    render() {
        return (
            <div className='contacts'>
                <ul>
                    <Contacts/>
                    <Contacts/>
                    <Contacts/>
                    <Contacts/>

                </ul>
            </div>
        )
    }
}

export default ContactList;