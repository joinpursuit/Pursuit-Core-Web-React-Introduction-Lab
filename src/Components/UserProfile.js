import React from "react";

const userImage = {
  imgLink:
    "/Users/teraesametivier/Desktop/REACT/Pursuit-Core-Web-React-Introduction-Lab/public/profile.png",
};

const UserProfile = () => {
  return (
    <section className="user-profile">
      <div id="image">
        <img src={userImage.imgLink} width="100" height="100"></img>
      </div>
      <div id="content">
        <h4>Jordan Walke</h4>
        <h6>React Creator</h6>
        <p> Lorem Ipsum</p>
      </div>
    </section>
  );
};

export default UserProfile;
