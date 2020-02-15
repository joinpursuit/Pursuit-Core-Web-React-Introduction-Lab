import React from 'react';
import './contacts.css';

const Contacts = (props) => {
    return (
        <div className={"Person"}>
            <div className="image">
                <img className ="picture" src ="https://i.pinimg.com/236x/e1/a7/b6/e1a7b6048ebf26655cc593a2b415b812.jpg"></img>
            </div>
            <div className="list">
                <div id="name">
                    {props.name}
                </div>
                <div id="title">
                    {props.title}
                </div>
                <div id="summary">
                    {props.summary}
                </div>
            </div>
        </div>
    )
}

export default Contacts;