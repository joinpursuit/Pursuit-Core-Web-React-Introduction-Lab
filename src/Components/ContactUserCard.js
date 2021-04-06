import React from 'react'

const contactInfo = {
    name: "Jordan Walke",
    jobTitle: "React Creator",
    description: "Lorem Ipsem"
  }

const contactUserCard = () => {
    return (
        <div>
            <h1>{contactInfo.name}</h1>
            <h2>{contactInfo.jobTitle}</h2>
            <p>{contactInfo.description}</p>
        </div>
    )
}

export default contactUserCard