import React from "react";
import "../master/Contacts.css";
import ContactCard from "../components/ContactCard.js";

class Contacts extends React.Component {
  render() {
    return (
      <div className="Contacts">
        <h3>Contacts</h3>
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    );
  }
}

export default Contacts;
