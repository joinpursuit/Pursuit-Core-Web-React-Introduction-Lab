import React from "react";
import ContactUserCard from "./ContactUserCard";
import "../styles/contacts.css"

const Contacts = () => {
    return (
        <main>
        <h2>Contacts</h2>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        </main>
    )
}


export default Contacts;