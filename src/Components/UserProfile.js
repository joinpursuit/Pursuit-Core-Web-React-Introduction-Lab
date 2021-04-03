import React from "react";

const profileInfo = {
  firstName: "Jordan",
  lastName: "Walke",
  imgLink:
    "https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png",
  jobDescription: "React Creator",
};

const UserProfile = () => {
  return (
    <div>
      <div>
        <img src={profileInfo.imgLink} width="150" height="150"></img>
      </div>
      <div>
        <h2>
          {profileInfo.firstName} {profileInfo.lastName}
        </h2>
        <h3>{profileInfo.jobDescription}</h3>
        <p>Lorem Ipsem</p>
      </div>
    </div>
  );
};

export default UserProfile;
