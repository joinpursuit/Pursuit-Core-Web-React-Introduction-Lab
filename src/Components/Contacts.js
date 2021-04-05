import React from "react";
import ContactUserCard from "./ContactUserCard";
import "./Contacts.css";

// const Contacts = () => {
//   return (
//     <>
//       <div className="Contacts">
//         <h2>Contacts</h2>
//         <ContactUserCard />
//         <ContactUserCard />
//         <ContactUserCard />
//         <ContactUserCard />
//       </div>
//     </>
//   );
// };

//Refactoring Above Code
class Contacts extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <>
        <div className="Contacts">
          <h2>Contacts</h2>
          <ContactUserCard />
          <ContactUserCard />
          <ContactUserCard />
          <ContactUserCard />
        </div>
      </>
    );
  }
}

export default Contacts;
