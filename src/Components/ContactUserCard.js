import React from "react";

const user = {
  name: "Jordan Walke",
  title: "React Creator",
  subject: "Lorem Ipsem",
};

const ContactUserCard = () => {
  return (
    <>
      <img
        src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
        alt="post"
        width="200"
        height="200"
      />
      <h1>{user.name}</h1>
      <p>{user.title}</p>
      <p>{user.subject}</p>
    </>
  );
};

export default ContactUserCard;
