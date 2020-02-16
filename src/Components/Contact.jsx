import React from 'react';

 import './Contact.css'
import ContactList from './ContactList';


class Contact extends React.Component {
    render(){
        return(
            <div>
                <div id="contacts">
                <h2>Contacts</h2>
                <ContactList/>
                <ContactList/>
                <ContactList/>
                <ContactList/>
                </div>
                <div>
                </div>

                
            </div>
        )
    }
}
export default Contact;