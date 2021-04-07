import React from 'react'

const contactInfo = {
    name: "Jordan Walke",
    job: "React Creator",
    description: "Lorem Ipsem"
}

export default function ContactUserCard() {
    return (
        <div>
            <h3>{ contactInfo.name }</h3>
            <h4>{ contactInfo.job }</h4>
            <p>{ contactInfo.description }</p>
        </div>
    )
}
