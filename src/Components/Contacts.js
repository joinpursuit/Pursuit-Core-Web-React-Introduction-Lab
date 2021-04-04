import React from 'react';
import ContactUserCard from './ContactUserCard.js';

class Contacts extends React.Component {
  render() {
    return (
      <div className='Contacts'>
        <h2>Contacts</h2>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    )
  }
}

// const Contacts = () => {
//   return (
//     <div className='Contacts'>
//       <h2>Contacts</h2>
//       <ContactUserCard />
//       <ContactUserCard />
//       <ContactUserCard />
//       <ContactUserCard />
//     </div>
//   )
// }

export default Contacts;