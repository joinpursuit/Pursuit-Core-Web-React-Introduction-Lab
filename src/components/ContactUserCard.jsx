import React from "react";
import "../styles/ContactUserCard.css";

class ContactUserCard extends React.Component {
  render() {
    return (
      <div className="contact-card">
        <img
          className="contact-img"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="User image"
        />
        <div className="contact-description">
          <p className="contact-name">Michael Jordan</p>
          <p className="contact-title">Title</p>
          <p className="contact-body">Lorem Ipsum</p>
        </div>
      </div>
    );
  }
}

export default ContactUserCard;
