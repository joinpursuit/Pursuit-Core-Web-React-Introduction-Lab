import React from 'react'

const allUser = {
    name: 'Jordan Walke',
    job: 'React Creator',
    info: 'Lorem Ipsem'
}

const ContactUserCard = () => {
    return (
        <div className=''>
            {allUser.name}
            {allUser.job}
            {allUser.info}
        </div>
    )
}

export default ContactUserCard