import React from 'react';
import UserCard from "./ContactUserCard";
import "./Contacts.css";

function Contacts () {
    return (
        <div id = "contacts">
            <p className ="heading"> Contacts</p>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>
    )
}

export default Contacts