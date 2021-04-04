import React from "react";
import ContactUserCard from "./ContactUserCard";
import "../styling/Contacts.css";

class Contacts extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="Contacts">
        <h1>Contacts</h1>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </section>
    );
  }
}

export default Contacts;
