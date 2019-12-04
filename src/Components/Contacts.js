import React from 'react';
import ContactUserCard from './ContactUserCard'

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <p>Contacts</p>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    )
  }
}

export default Contacts

