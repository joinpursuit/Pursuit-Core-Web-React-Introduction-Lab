import React from 'react';
import Photo from "/Users/anasnahil/Desktop/pursuit/module3/reactIntro/Pursuit-Core-Web-React-Introduction-Lab/src/Components/profile.png"

const userInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    description: "Lorem Ipsem"
}

const UserProfile = ()=>{
    return (
        <section id="user-profile">
            <img src={Photo} alt="profile"></img>
            <div id="user-info">
                <h4>{userInfo.name}</h4>
                <h5>{userInfo.title}</h5>
                <p>{userInfo.description}</p>
            </div>
        </section>
    );
}

export default UserProfile;