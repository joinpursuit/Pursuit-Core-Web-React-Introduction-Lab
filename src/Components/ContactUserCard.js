import React from "react";

const contactInfo = {
    imageLink: "https://simg.nicepng.com/png/small/377-3778780_helper4u-maid-bai-cook-chef-empty-profile-picture.png",
    name: "Jordan Walke",
    title: "React Creator",
    location: "Lorem Ipsem"
}

const ContactUserCard = () => {
    return (
        <div className="user-card">
            <img src={contactInfo.imageLink} width="200px" height="200px"></img>
            <h3>{contactInfo.name}</h3>
            <p>{contactInfo.title}</p>
            <p>{contactInfo.location}</p>
        </div>
    )
}


export default ContactUserCard;