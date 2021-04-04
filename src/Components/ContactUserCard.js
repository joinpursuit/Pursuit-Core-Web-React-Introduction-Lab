import React from "react";
import "../styles/contactUserCard.css";

const user = {
  name: "Jordan Walke",
  title: "React Creator",
  subject: "Lorem Ipsem",
};

const ContactUserCard = () => {
  return (
    <div className="contactUserCard">
      <img
        src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
        alt="post"
        width="160"
        height="160"
      />
      <div className="contactUserCardText">
        <h3>{user.name}</h3>
        <h4>{user.title}</h4>
        <p>{user.subject}</p>
      </div>
    </div>
  );
};

export default ContactUserCard;
