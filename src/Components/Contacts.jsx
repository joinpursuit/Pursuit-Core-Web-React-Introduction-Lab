import React from 'react';
import Contact_Card from './Contact_Card'
import './Contacts.css'

class Contact extends React.Component {
    render(){
        return(
            <div>
                <h2>Contacts</h2>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
            </div>
        )
    }
}
export default Contacts;