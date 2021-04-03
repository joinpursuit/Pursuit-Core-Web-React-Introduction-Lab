import React from "react";
import ContactUserCard from "./ContactUserCard.js";

const Contacts = () => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
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
    </>
  );
};

export default Contacts;