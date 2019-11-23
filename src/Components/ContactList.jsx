import React from 'react';
import './ContactList.css';
import UserProfile from './UserProfile';

class ContactList extends React.Component {
    render() {
        return(
            <div className="contactList">
                <h3>Contact List</h3>
                <UserProfile />
                <UserProfile />
                <UserProfile />
                <UserProfile />
            </div>
        )
    }
}

export default ContactList;