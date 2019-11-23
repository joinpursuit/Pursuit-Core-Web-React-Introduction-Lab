import React from "react";

class UserInfo extends React.Component {
  post = {
    userName: "Jordan Walke",
    imageLink:
      "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
    description: "Lorem Ipsem"
  };
  render() {
    return (
      <div className="profileInfo">
        <img src={this.post.imageLink} />
        <div className="info">
          <p>{this.post.userName}</p>
          <p>{this.post.description}</p>
        </div>
      </div>
    );
  }
}

export default UserInfo;
