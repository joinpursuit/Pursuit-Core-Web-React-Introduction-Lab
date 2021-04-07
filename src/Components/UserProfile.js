import React from 'react'

const user = {
    name : "Jordan Walke",
    occupation : "React Creator",
    description : "Lorem Ipsem"

}

const UserProfile = () => {
    return (
        <div>
        {user.name}
        {user.occupation}
        {user.description}
        </div>
    )
}
export default UserProfile;

