import React from "react";
import "../Style/userProfile.css"
// import ContactUserCard from './ContactUserCard'

// const profile  ={
//     pic: "https://media-exp1.licdn.com/dms/image/C4D03AQHmjj1I9EaR7Q/profile-displayphoto-shrink_800_800/0/1603469546218?e=1622678400&v=beta&t=GHj7W0wFLFe7iWbW9vavb7osKefbCrhee5xiwMEVBSs"
// }
const postContact = {
  profile:
    "https://media-exp1.licdn.com/dms/image/C4D03AQHmjj1I9EaR7Q/profile-displayphoto-shrink_800_800/0/1603469546218?e=1622678400&v=beta&t=GHj7W0wFLFe7iWbW9vavb7osKefbCrhee5xiwMEVBSs",
  name: "Jordan Walke",
  title: "React Creator",
  location: "Lorem Ipsem",
};
const UserProfile = () => {
  return (
    <div className="userProfile">
      <img src={postContact.profile} width="200px" height="200px"></img>
      <h3>{postContact.name}</h3>
      <p>{postContact.title}</p>
      <p>{postContact.location}</p>
      {/* <img  src={profile.pic} width= "200" height="200"></img> */}
      {/* <ContactUserCard></ContactUserCard> */}
    </div>
  );
};

export default UserProfile;
