import React from "react";
import "../styles/userProfile.css";

const user = {
  name: "Jordan Walke",
  title: "React Creator",
  subject: "Lorem Ipsem",
};

function UserProfile() {
  return (
    <div className="userProfile">
      <img
        src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
        alt="post"
        width="150"
        height="150"
      />
      <section className="userInfo">
        <h1>{user.name}</h1>
        <p>{user.title}</p>
        <p>{user.subject}</p>
      </section>
    </div>
  );
}

export default UserProfile;
