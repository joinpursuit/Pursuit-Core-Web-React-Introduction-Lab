import React from 'react';
import './contacts.css';

const Contacts = (props) => {
    return (
        <div className={"person"}>
            Name: {props.name},
            Title: {props.title},
            Summary: {props.summary}
        </div>
    )
}

export default Contacts;