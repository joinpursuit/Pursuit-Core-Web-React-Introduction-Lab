import React from "react";
import ContactUserCard from "./ContactUserCard"
import "../styles/contacts.css"
 const Contacts = () =>{
    return (
        <div className="contacts">
            <h1>Contacts</h1>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
     
    )
}

 export default Contacts