import React from 'react';

const userCardInfo = {
    name: 'Jordan Walke',
    job: 'React Creator',
    info: 'Lorem Ipsem',
};

const contactCards = () => {
    return (
        <div className='contact-cards-info'>
            <img src='profile.png'></img>
            <h2>{userCardInfo.name}</h2>
            <h3>{userCardInfo.job}</h3>
            <p>{userCardInfo.info}</p>
        </div>
    )
}

export default contactCards;