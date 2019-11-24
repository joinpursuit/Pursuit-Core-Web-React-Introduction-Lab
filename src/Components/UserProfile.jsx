import React from 'react'; 

class UserProfile extends React.Component {
    constructor() {
        super();
        this.userprofile = {
                name: "Jordan Walke",
                title: "React Creator",
                bio: "Lorem Ipsem", 
                img: "https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg"
        }
    }

    render() {
        return (
            <div className="user">
            <img src={this.userprofile.img} alt="profilepic"></img>
            <div className="userDetails">
            <h2>{this.userprofile.name}</h2>
            <h3>{this.userprofile.title}</h3>
            <p>{this.userprofile.bio}</p>
            </div>
           </div>
        )
    }
}

export default UserProfile;