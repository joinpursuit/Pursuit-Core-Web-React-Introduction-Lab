import React from 'react'
import '../CSS/UserProfile.css'

const UserProfile = (user) => {
    return (
        <div className={"userProfileContainer"}>
            <div className="imageContainer">
                <img className="picture" src ="https://img.icons8.com/cotton/2x/gender-neutral-user--v1.png"></img>
            </div>
            <div className="profileInfo">
                <div id="name"> {user.name} </div>
                <div id="jobtTtle"> {user.jobTitle} </div>
                <div id="bio"> {user.bio} </div>
            </div>
        </div>
    )
}

export default UserProfile
