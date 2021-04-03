import React from "react"
import ContactUserCard from "./ContactUserCard"
import '../styling/Contacts.css'

const Contacts = ()=>{
    return (
    <section className="Contacts">
        <h1>Contacts</h1>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
    </section>
    )
}

export default Contacts