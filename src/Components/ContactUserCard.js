import React from 'react';
import Photo from "../profile.png"

const userInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    description: "Lorem Ipsem"
}

const ContactUserCard = ()=>{
    return (
    <div>
        <img src={Photo} alt="profile"></img>
        <h4>{userInfo.name}</h4>
        <h5>{userInfo.title}</h5>
        <p>{userInfo.description}</p>
    </div>
    )

}
export default ContactUserCard;