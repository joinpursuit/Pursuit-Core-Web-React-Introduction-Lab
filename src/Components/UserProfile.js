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
        <h3>Jordan Walke</h3>
        <h5>React Creator</h5>
        <p>Lorem Ipsem</p>
      </div>
    </section>
  );
};

export default UserProfile;
