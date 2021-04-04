import React from "react";
import ContactUserCard from "./ContactUserCard"

const Contacts = ()=>{
    return (
        <section id="contacts">
            <h4>Contacts</h4>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </section>
    )
}

export default Contacts;