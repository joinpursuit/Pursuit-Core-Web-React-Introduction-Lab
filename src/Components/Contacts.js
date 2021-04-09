import React from "react";
import ContactUserCard from "./ContactUserCard";
import "./styles/Contacts.css";


const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
