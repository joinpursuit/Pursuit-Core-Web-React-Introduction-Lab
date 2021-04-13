import React from "react";

const userProfileInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    description: "Lorem Ipsem"
}

const UserProfile = () => {
    return (
        <div>
            <p>{userProfileInfo.name}</p>
            <p>{userProfileInfo.title}</p>
            <p>{userProfileInfo.description}</p>
        </div>
    )
}

export default UserProfile;
