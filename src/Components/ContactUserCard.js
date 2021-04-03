import React from 'react';
import Photo from "../profile.png"

const userInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    description: "Lorem Ipsem"
}

const ContactUserCard = ()=>{
    return (
    <div className="user-card">
        <img src={Photo} alt="profile"></img>
        <div className="user-card-info">
            <h4>{userInfo.name}</h4>
            <h5>{userInfo.title}</h5>
            <p>{userInfo.description}</p>
        </div>
    </div>
    )

}
export default ContactUserCard;