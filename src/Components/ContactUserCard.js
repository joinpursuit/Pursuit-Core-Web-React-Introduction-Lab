import React from "react"

const contactInfo = {
    name: "Jordan Walke",
    image: "./profile.png",
    jobTitle: "React Creator",
    description: "Lorem Ipsem"
  }

const contactUserCard = () => {
    return (
        <div>
            <h1>{contactInfo.name}</h1>
            <img src={contactInfo.image} alt="profilePicture"></img>
            <h2>{contactInfo.jobTitle}</h2>
            <p>{contactInfo.description}</p>
        </div>
    )
}

export default contactUserCard