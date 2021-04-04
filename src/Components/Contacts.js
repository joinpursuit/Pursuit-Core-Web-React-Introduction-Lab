import React from "react";
import ContactUserCard from "./ContactUserCard";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="Contacts">
      <h1>Contacts</h1>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
