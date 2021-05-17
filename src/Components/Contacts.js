import React from "react";
import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
  return (
    <>
      <div class="contacts">
        <h3 class="contacts">Contacts</h3>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    </>
  );
}

export default Contacts;
