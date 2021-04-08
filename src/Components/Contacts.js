import React from "react";
import ContactUserCard from "./ContactUserCard";

let contactArr = [
  <ContactUserCard />,
  <ContactUserCard />,
  <ContactUserCard />,
  <ContactUserCard />,
];

const Contacts = () => {
  return (
    <div className="contacts">
      <h3>Contacts</h3>
      {contactArr}
    </div>
  );
};
export default Contacts;
