import React from 'react';

import './Contact.css'
import ContactList from './ContactList';
// import UserProfile from './UserProfile';


class Contact extends React.Component {
    render(){
        return(
            <div>
                <div id="contacts">
                <h2>Contacts</h2>
                <div id="contact_List">
                <ContactList/>
                <ContactList/>
                <ContactList/>
                </div>
                </div>
            </div>
        )
    }
}
export default Contact;