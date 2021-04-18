import React from 'react'
import './Contacts.css'
let person = {
    name: "Jordan Walke",
    bio: "React Creator" ,
    description: "Lorem Ipsem" 
}
function UserCard() {
    return (
    <div className = "card">
        <img src="https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png" width="150px" />
        <div className='details'>
            <p className='name'>{person.name}</p>
            <p className='job'>{person.bio}</p>
            <p className='description'>{person.description}</p>
        </div>
    </div>

    )
}
export default UserCard