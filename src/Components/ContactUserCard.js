import React from "react"
import Image from "./UserProfile/img.jpg"
import "./ContactUserCard.css"

const ContactUserCard = () => {
    return (
        <div className="contact-user-card">
            <div className="card-img">
                <img src={Image} alt=""></img>
            </div>
            <div className="card-desc">
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </div>
        </div>
    )
}

export default ContactUserCard