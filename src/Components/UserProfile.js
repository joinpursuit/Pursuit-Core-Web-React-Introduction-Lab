import React from "react"
import Image from "./UserProfile/img.jpg"
import "./UserProfile.css"

const UserProfile = () => {
    return (
        <div className="user-profile">
            <div className="user-profile_pic">
                <img src={Image} alt=""></img>
            </div>
            <div className="user-profile_desc">
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </div>
        </div>
    )
}

export default UserProfile