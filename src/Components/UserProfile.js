import React from 'react';


const Profile = {
    Name: 'Jordan Walke',
    Title: 'React Creator',
    Description:'Lorem Ipsem',
}


const UserProfile = () =>{
    return (
        <section>
            <h1>{Profile.Name}</h1>
            <h2>{Profile.Title}</h2>
            <p>{Profile.Description}</p>
        </section>
    )
}

export default UserProfile;