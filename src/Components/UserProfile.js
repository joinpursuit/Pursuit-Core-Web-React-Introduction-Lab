import React from "react";

const profileInfo = {
    imageLink: "https://simg.nicepng.com/png/small/377-3778780_helper4u-maid-bai-cook-chef-empty-profile-picture.png",
    name: "Jordan Walke",
    title: "React Creator",
    location: "Lorem Ipsem"
}

const UserProfile = () => {
    return (
        <div className="user-profile">
            <img src={profileInfo.imageLink}></img>
            <h2>{profileInfo.name}</h2>
            <p>{profileInfo.title}</p>
            <p>{profileInfo.location}</p>
        </div>
    )
}

export default UserProfile;