import React from 'react';
import avatar from '../female.png';

class ContactCard extends React.Component {
    constructor() {
        super();
        this.info = {
            name: 'Briahana Maugé',
            imageLink: avatar,
            title: 'React Creator',
            description: 'Hello there!'
        }
    }
    render() {
        return (
            <div>
                <img src={this.info.imageLink} alt='post' width='200' height='200'></img>
                <h3>{this.info.name}</h3>
                <h5>{this.info.title}</h5>
                <p>{this.info.description}</p>
            </div>
        )
    }
}

export default ContactCard;