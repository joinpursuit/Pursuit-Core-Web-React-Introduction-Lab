import React from "react";

class UserInfo extends React.Component {
  user = {
    userName: "Jordan Walke",
    imageLink:
      "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
    title: "React Creator",
    description: "Lorem Ipsem"
  };
  render() {
    return (
      <div className="profileInfo">
        <img src={this.user.imageLink} alt="hello" />
        <div className="info">
          <h3>{this.user.userName}</h3>
          <h4>{this.user.title}</h4>
          <p>{this.user.description}</p>
        </div>
      </div>
    );
  }
}

export default UserInfo;
