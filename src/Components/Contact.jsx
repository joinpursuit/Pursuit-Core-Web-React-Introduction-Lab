import React from 'react';

import './Contacts.css'
import Contact_list from './Contact_list';

class Contact_list extends React.Component {
    render(){
        return(
            <div>
                <h2>Contacts</h2>
                <Contact_list/>
                <Contact_list/>
                <Contact_list/>
                <Contact_list/>
            </div>
        )
    }
}
export default Contacts;