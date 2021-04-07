import React from 'react'

const allUsers = {
   name: 'Jordan Walke',
   job: 'React Creator',
   info: 'Lorem Ipsem'
}

const ContactUserCard = () => {
   return (
      <div className=''>
         {allUsers.name}
         {allUsers.job}
         {allUsers.info}
      </div>
   )
}

export default ContactUserCard