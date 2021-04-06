import React from 'react'

const userInfo = {
    name: "Jordan Walke",
    jobTitle: "React Creator",
    description: "Lorem Ipsem",
}

const userProfile = () => {
    
    return (
        <div>
            <h1>{userInfo.name}</h1>
            <h2>{userInfo.jobTitle}</h2>
            <p>{userInfo.description}</p>
        </div>
    )
    
}

export default userProfile