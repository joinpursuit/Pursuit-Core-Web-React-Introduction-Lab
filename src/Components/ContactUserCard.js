import React from 'react';

const contactInfo = {
  name: "Jordan Walke",
  title: "React Creator",
  imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  description: "Lorem Ipsem"
};

const ContactUserCard = () => {
  return (
    <div>
      <p>{contactInfo.name}</p>
      <p>{contactInfo.title}</p>                
      <img src={contactInfo.imageLink} alt='post' width='200' height='200'></img>
      <p>{contactInfo.description}</p>
    </div>
  )        
}

export default ContactUserCard;