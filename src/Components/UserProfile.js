import React from 'react';

const UserInfo = {
  name: "Jordan Walke",
  title: "React Creator",
  profileImage: 'https://pixy.org/src/9/94083.png',
  description: "Lorem Ipsem"
};

const UserProfile = () => {
  return (
    <div className='UserProfile'>
        <img className='profile-images' src={UserInfo.profileImage} alt='profile pic'></img>
        <div>
          <h4 className='contact-name'>{UserInfo.name}</h4>
          <h5 className='contact-title'>{UserInfo.title}</h5>              
          <p className='contact-desc'>{UserInfo.description}</p>
        </div>
    </div>
  )        
}

export default UserProfile;