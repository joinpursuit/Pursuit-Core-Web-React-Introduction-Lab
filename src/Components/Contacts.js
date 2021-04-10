import React from "react"
// import contactCard from "./ContactUserCard"
import ContactUserCard from "./ContactUserCard"

const Contacts = () => {
    return (
        <div className = "Contacts">
            <h2>Contacts</h2>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </div>
    )
}

export default Contacts;