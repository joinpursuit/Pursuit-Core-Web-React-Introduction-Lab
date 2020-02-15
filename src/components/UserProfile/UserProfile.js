import React from 'react';

class Users extends React.Component {
    user = {
        // img:
        name: "Jordan Walke",
        title: "React Creator",
        description: "Lorem Ipsem" 
        

    }
    render(){
        return(
            <div>
            <h3>{this.user.name}</h3>
            <h4>{this.user.title}</h4>
            <p>{this.user.description}</p>
            </div>
        )
    }
}

export default Users;