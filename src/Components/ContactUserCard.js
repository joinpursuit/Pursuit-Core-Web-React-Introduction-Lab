import React from 'react';

export default function ContactUserCard() {
  return (
    <div className="contactUserCard">
      <img alt="" src="/profile.png" />
      <div className="profile-contents">
        <h3 className="name">Jordan Walke</h3>
        <h4 className="position">React Creator</h4>
        <p className="lorem">Lorem Ipsem</p>
      </div>
    </div>
  );
}