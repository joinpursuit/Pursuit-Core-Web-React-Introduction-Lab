import React from "react";

export function UserProfile() {
  return (
    <div id="user-profile">
      <img alt="" src="/profile.png" />
      <div className="profile-contents">
        <span className="name">Jordan Walke</span>
        <span className="position">React Creator</span>
        <span className="lorem">Lorem Ipsem</span>
      </div>
    </div>
  );
}