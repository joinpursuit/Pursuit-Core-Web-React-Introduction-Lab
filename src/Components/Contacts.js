import React from "react"
import "../styling/Contacts.css"
import ContactUserCard from "./ContactUserCard"

function Contacts () {
    return (
        <section id="contacts-container">
            <h4 id="contacts-title">Contacts</h4>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </section>
    )
}

export default Contacts;