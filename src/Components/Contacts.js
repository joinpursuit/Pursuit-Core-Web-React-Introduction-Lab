import React from "react"
import Card from "./ContactUserCard"
import "../styles/Contacts.css"

const Contacts = () =>{
    return ( 
        <section className = "container">
            <h1>Contacts</h1>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}

export default Contacts 