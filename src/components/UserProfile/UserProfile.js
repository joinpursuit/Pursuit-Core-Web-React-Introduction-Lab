import React from 'react';
import './UserProfile.css';


class Users extends React.Component {
    render(){
        const userArr = [
        {
            name: "Jordan Walker",
            title: "React Creator",
            description: "Lorem Ipsem"
    
        },
        {
            name: "Henry Nunez",
            title: "Pursuit Student",
            description: "YERRRRRRR"
    
        },
        {
            name: "Bruce Wayne",
            title: "Gotham Crusader",
            description: "Lorem Ipsem"
    
        }
        ]

        let contacts = userArr.map(contact =>{
            return (
                <>
                <h3>{contact.name}</h3>
                <h2>{contact.title}</h2>
                <p>{contact.description}</p>
                </>
            )

        });

        return (
            <div>
            <h4>Contacts</h4>
                {contacts}
            </div>
        )

    }
}

export default Users;