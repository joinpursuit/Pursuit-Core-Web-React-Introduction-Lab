import React from "react";
import Contact from "./ContactUserCard";
import "../styles/Contacts.css";

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts">
        <h3 className="contacts-title">Contacts</h3>
        <Contact />
        <Contact />
        <Contact />
      </div>
    );
  }
}

export default Contacts;
