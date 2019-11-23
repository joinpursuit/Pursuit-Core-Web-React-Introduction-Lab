import React from "react";
import UserInfo from "./userInfo";
import "./contacts.css";

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts">
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
    );
  }
}

export default Contacts;
