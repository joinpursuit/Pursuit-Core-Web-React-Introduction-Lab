import React from 'react';


class Contacts extends React.Component {
    constructor(prop) {
     super(prop)
        this.contact = {
            name: 'John Doe',
            image: 'https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png',
            job: 'w',
            description: `This is a description`
        }
    }

    
    render() {
        return ( 
            <div className='contact-user-card'>
                <img src={this.contact.image} alt='' width='200px'/>
                <h3>{this.contact.name}</h3>
                <p>{this.contact.job}</p>
                <p>{this.contact.description}</p>
            </div>
          
        )
    }
   
}

export default Contacts;
