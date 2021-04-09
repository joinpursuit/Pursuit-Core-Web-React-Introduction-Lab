import React from "react";
import ContactUserCard from './ContactUserCard'
import './Contacts.css'

// import "./index.css";

const Contacts = () => {
  return <div className="contacts">
  <h2>Contacts</h2>
  <ContactUserCard />
  <ContactUserCard />
  <ContactUserCard />
  <ContactUserCard />
  </div>
}

export default Contacts;