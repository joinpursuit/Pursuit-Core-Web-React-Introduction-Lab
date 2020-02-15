import React from 'react';

// import './Contacts.css'
import ContactList from './ContactList';

class Contact extends React.Component {
    render(){
        return(
            <div>
                <h2>Contacts</h2>
                <ContactList/>
                <ContactList/>
                <ContactList/>
                <ContactList/>
            </div>
        )
    }
}
export default Contact;