import React from 'react';

class Contact extends React.Component {
    contact = {
        name: "Jordan Walke",
        title: "React Creator",
        description: "Lorem Ipsem"
    }
    render () {
        return (
            <div>
                <h4> {this.contact.name} </h4>
                <h5> {this.contact.title} </h5>
                <p> {this.contact.description} </p>
            </div>
        )
    }
}
export default Contact;