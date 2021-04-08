import React from "react"
import ContactUserCard from "./ContactUserCard";
import "../App.css"

const Contacts = () => {
    return (
        <section className="contacts">
            <h2>Contacts</h2>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </section>
    )
}

export default Contacts;

{/* <div>
            <h3>{contact.name}</h3>,
            <p>{contact.job}</p>,
            <p>{contact.lorem}</p>
        </div> */}