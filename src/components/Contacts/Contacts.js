import React from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends React.Component {
  render() {
    return (
      <section className="contacts">
        <h3>Contacts</h3>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </section>
    );
  }
}


export default Contacts;
