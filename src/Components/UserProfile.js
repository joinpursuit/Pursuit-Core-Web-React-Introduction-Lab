import React from 'react';

const userInfo = {
  name: "Jordan Walke",
  title: "React Creator",
  imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  description: "Lorem Ipsem"
};

const UserProfile = () => {
  return (
    <div>
      <img src={userInfo.imageLink} alt='post' width='200' height='200'></img>
      <p>{userInfo.name}</p>
      <p>{userInfo.title}</p>                
      <p>{userInfo.description}</p>
    </div>
  )        
}

export default UserProfile;