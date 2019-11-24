import React from 'react';
import ContactUserCard from'./ContactUserCard';
import './Contact.css'

class Contacts extends React.Component {
    render(){
        return(
            <div className='Contacts'>
                <ContactUserCard/>
                <ContactUserCard/>
                <ContactUserCard/>
                <ContactUserCard/>
            </div>
        )
    }
}


export default Contacts