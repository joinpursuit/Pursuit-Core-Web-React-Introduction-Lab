import React from 'react'
import "./UserProfile.css"

let user = {
    name: "Jordan Walke",
    job: 'React Creator',
    description: "Lorem Ipsem"
}

function Profile (){
    return (
    <div className='profile'>
        <img src="https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png" width="150px" />
        <div className='details'>
            <p className='name'>{user.name}</p>
            <p className='job'>{user.job}</p>
            <p className='description'>{user.description}</p>
        </div>
    </div>
    )
}
export default Profile