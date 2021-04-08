import React from "react";
import yes from "./assets/yes.png";

const ContactUserCard = () => {
  return (
    <div className="container">
      <div className="contactimg">
        <img src={yes} alt="" />
      </div>
      <div className="contactinfo">
        <h3 className="margin">Jordan Walke</h3>
        <h4 className="margin">React Creator</h4>
        <p className="margin">Lorem Ipsem</p>
      </div>
    </div>
  );
};
export default ContactUserCard;
