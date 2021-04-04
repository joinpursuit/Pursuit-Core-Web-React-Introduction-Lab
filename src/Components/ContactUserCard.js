import React from "react";
import "./ContactUserCard.css";

const ContactUserCard = () => {
  return (
    <div className="ContactCard">
       <img
        src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
        alt="post"
        width="200"
        height="200"
      />
      <h3>Jordan Walke</h3>
      <h4>React Creator</h4>
      <p>Lorem Ipsem</p>
    </div>
  );
};

export default ContactUserCard;