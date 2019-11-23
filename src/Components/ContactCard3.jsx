import React from 'react';

import './ContactCard.css'

class ContactCard3 extends React.Component {
    render() {
        return(
            <div className="contact-card">
                <img src="https://pbs.twimg.com/media/EIkMGS8XYAIXKlw?format=jpg&name=4096x4096"></img>
                <h2> Sarah Storm </h2>
                <h3> Mage </h3>
                <p> Sarah Storm has a sharp eye for details and an even sharper tongue. Beware her magic missile! </p>
            </div>
        )
    }

}

export default ContactCard3;