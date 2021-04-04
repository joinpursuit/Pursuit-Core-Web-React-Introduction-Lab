import React from "react";
import "../styles/UserProfile.css"

const user = {
    name: "Jordan Walke",
    title: "React Creator",
    subject: "Lorem Ipsem",
  };
  

function UserProfile() {
  return (
    <div className="UserProfile">
      <img
        src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
        alt="post"
        width="200"
        height="200"
      />
      <h1>{user.name}</h1>
      <p>{user.title}</p>
      <p>{user.subject}</p>
    </div>
  );
}

export default UserProfile;
