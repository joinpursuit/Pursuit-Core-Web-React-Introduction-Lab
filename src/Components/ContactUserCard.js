import React from "react";

let userCard = {
  name: "Jordan Walke",
  title: "React Creator",
  description: "Lorem Ipsem",
};

const ContactUserCard = () => {
  return (
    <>
      <div class="contact-user-card">
        <h3 class="name">{userCard.name}</h3>
        <h4 class="title">{userCard.title}</h4>
        <p class="description">{userCard.description}</p>
      </div>
    </>
  );
};

export default ContactUserCard;
