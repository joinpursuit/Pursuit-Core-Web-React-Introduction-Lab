import React from "react";

const userImage = {
  imgLink: "../public/profile.png",
};

const ContactUserCard = () => {
  return (
    <section className="contact-usercard">
      <div id="contact-img">
        <img src={userImage.imgLink} width="100" height="100"></img>
      </div>
      <div id="contact-content">
        <h3>Jordan Walke</h3>
        <h5>React Creator</h5>
        <p>Lorem Ipsem</p>
      </div>
    </section>
  );
};

export default ContactUserCard;
