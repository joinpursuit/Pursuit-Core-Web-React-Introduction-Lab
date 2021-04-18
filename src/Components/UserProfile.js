import React from "react";

let userProf = {
  name: "Jordan Walke",
  title: "React Creator",
  description: "Lorem Ipsem",
};

const UserProfile = () => {
  return (
    <>
      <div id="user-profile">
        <h3 class="name">{userProf.name}</h3>
        <h4 class="title">{userProf.title}</h4>
        <p class="description">{userProf.description}</p>
      </div>
    </>
  );
}

export default UserProfile;
