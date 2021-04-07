import React from "react";
import ContactUserCard from "./ContactUserCard.js";
import "../styles/contacts.css"

const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      <ul className="contact">
        <li>
          <ContactUserCard />
        </li>
        <li>
          <ContactUserCard />
        </li>
        <li>
          <ContactUserCard />
        </li>
        <li>
          <ContactUserCard />
        </li>
      </ul>
    </section>
  );
};

export default Contacts
