import React from "react";
import Photo from "../profile.png";

const userInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    	description: "Lorem Ipsem",
};

const UserProfile = () => {
    return (
        <section id="user-profile">
            <img src={Photo} alt="Profile"></img>
            <h2>{userInfo.name}</h2>
            <h4>{userInfo.title}</h4>
            <p>Lorem Ipsem</p>
        </section>
    )
}

export default UserProfile;