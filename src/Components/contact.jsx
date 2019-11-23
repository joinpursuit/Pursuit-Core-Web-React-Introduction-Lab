import React from 'react';
import ContactCard from './contactCard';

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
export default Contact;