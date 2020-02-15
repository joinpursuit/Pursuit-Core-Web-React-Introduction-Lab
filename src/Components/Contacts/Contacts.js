import React from 'react';

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