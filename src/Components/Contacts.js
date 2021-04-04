import React from "react";
import ContactUserCard from "./ContactUserCard.js";
import "../styles/contacts.css";

// const Contacts = () => {
//   return (
//     <div className="contacts">
//       <h2>Contacts</h2>
//       <div>
//         <ContactUserCard />
//         <ContactUserCard />
//         <ContactUserCard />
//         <ContactUserCard />
//       </div>
//     </div>
//   );
// };


class Contacts extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="contacts">
      <h2>Contacts</h2>
      <div>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    </div>
    )
  }
}

export default Contacts;
