import React from 'react';
import Users from '../UserProfile/UserProfile';


const Contact = ({contacts}) =>{
    contacts = contacts.map(contact =>{
        return <Users />
    })
}

export default Contact