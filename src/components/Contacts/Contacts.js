import React from 'react';
import UsersProfile from '../UserProfile/UserProfile'



const Contacts = ({ users }) => {
    users = users.map(user => {
        return <UsersProfile name={user.name} title={user.title} description={user.description} key={user.title}/>
    })

    return(
        <div>
            <p>{users}</p>
        </div>
    )
}


export default Contacts;