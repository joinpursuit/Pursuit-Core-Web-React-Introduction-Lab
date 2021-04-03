import React from "react";
import Photo from "../profile.png"

const userInfo = {
    name: "Jordan Walke",
    title: "React Creator",
	description: "Lorem Ipsem",
};

const ContactUserCard = () => {
    return (
			<div>
            <img src={Photo} alt="Profile"></img>
            <h2>{userInfo.name}</h2>
            <h4>{userInfo.title}</h4>
            <p>Lorem Ipsem</p>
			</div>
		);
}

export default ContactUserCard;