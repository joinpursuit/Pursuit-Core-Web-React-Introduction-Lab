import React from 'react'

let user = {
    name : "Jordan Walke",
    bio : "React Creator",
    description : "Lorem Ipsem" ,
}

function UserProfile () {
    return (
        <div id="user-profile">
            <div>
                <p class="name">{user.name}</p>
                <p class="bio">{user.bio}</p>
                <p class="description">{user.description}</p>
            </div>
        </div>
    )
}

export default UserProfile