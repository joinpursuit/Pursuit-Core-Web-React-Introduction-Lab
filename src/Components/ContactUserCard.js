import React from "react";

const contactInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    profilePic: "/profile.png",
    description: "Lorem Ipsem"
};


const ContactUserCard = () => {
    return (
        <div className="ContactUserCard">
            <img className="profileImg" src={contactInfo.profilePic} alt="profilepic"></img>
            <div className="contact-info">
                <h3 className="contact-name">{contactInfo.name}</h3>
                <h4 className="contact-title">{contactInfo.title}</h4>
                <p className="contact-description">{contactInfo.description}</p>
            </div>
        </div>
    )
}

export default ContactUserCard