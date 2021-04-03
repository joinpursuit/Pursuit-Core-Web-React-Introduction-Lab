import React from "react";
import "../styling/UserProfile.css";

function UserProfile() {
  return (
    <div id="user-profile">
      <img src="https://tse4.mm.bing.net/th?id=OIP.Iv3C17Cke5LSRjFJIYAFqAHaHa&pid=Api&P=0&w=300&h=300"></img>
      <section id="details">
        <h3 id="name">Jordan Walke</h3>
        <h5 id="title">React Creator</h5>
        <h6 id="description">Lorem Ipsem</h6>
      </section>
    </div>
  );
}
export default UserProfile;
