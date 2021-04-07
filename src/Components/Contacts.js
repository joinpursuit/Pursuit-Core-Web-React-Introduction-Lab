import React from 'react' 
import UserCard from './ContactUserCard'

function Contacts () {
    return (
        <div id = "contacts">
            <p class="heading">Contacts</p>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>

    )
}

export default Contacts