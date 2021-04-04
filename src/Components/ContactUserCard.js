import React from 'react';

const ContactInfo = {
  name: "Jordan Walke",
  title: "React Creator",
  profileImage: 'https://pixy.org/src/9/94083.png',
  description: "Lorem Ipsem"
};

class ContactUserCard extends React.Component {
  render() {
    return (
      <div className='ContactUserCard'>
        <img className='profile-images' src={ContactInfo.profileImage} alt='profile pic'></img>
        <div className='contact-info'>
          <h4 className='contact-name'>{ContactInfo.name}</h4>
          <h5 className='contact-title'>{ContactInfo.title}</h5>              
          <p className='contact-desc'>{ContactInfo.description}</p>
        </div>
      </div>
    ) 
  }
}

// const ContactUserCard = () => {
//   return (
//     <div className='ContactUserCard'>
//       <img className='profile-images' src={ContactInfo.profileImage} alt='profile pic'></img>
//       <div className='contact-info'>
//         <h4 className='contact-name'>{ContactInfo.name}</h4>
//         <h5 className='contact-title'>{ContactInfo.title}</h5>              
//         <p className='contact-desc'>{ContactInfo.description}</p>
//       </div>
//     </div>
//   )        
// }

export default ContactUserCard;