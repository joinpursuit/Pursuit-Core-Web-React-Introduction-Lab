import React from "react";
import "../css/Contacts.css"
const Contact = ({ name, title, body }) => {
  return (
    <div id="contactContainer">
      <div className="contactPic">
        <img
          className="contactProfileImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLI8EtdCl-ZIw28f86gp1jEMHUviXefINs8JAosj9XpHgYWmwc"
          alt="profile-pic"
        ></img>
      </div>
      <div id="contacts">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default Contact;
