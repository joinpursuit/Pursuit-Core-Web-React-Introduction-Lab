import React from "react";
import  ContactUserCard  from "./ContactUserCard";

export function Contacts() {
  return (
    <div id="contacts">
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
}