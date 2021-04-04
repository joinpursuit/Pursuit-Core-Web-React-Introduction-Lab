import React from "react";
import "../styles/UserProfile.css"

const UserProfile = () => {
  return (
    <section className = "profile">
      <img src="/profile.png" alt="guy-silhouette" />
      <h1>Jordan Walke</h1>
      <p><strong>React Creator</strong></p>
      <p>Lorem Ipsem</p>
    </section>
  );
};

export default UserProfile;
