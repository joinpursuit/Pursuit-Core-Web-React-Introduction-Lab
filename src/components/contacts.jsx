import React from "react";
import UserInfo from "./userInfo";
import "./contacts.css";

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts">
        <h2>Contacts</h2>
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
    );
  }
}

export default Contacts;
