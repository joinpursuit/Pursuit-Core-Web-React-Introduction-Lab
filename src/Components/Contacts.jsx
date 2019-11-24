import React from 'react'; 

class Contacts extends React.Component {
    constructor() {
        super();
        this.contact = {
            name: "Jordan Walke",
            title: "React Creator",
            bio: "Lorem Ipsem", 
            img: "https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg"
        }
    }


    render() {
        return (
            <div className="contact">
            <img src={this.contact.img} alt="profilepic"></img>
            <div className="contactDetails">
            <h2>{this.contact.name}</h2>
            <h3>{this.contact.title}</h3>
            <p>{this.contact.bio}</p>
            </div>
            </div>
        )
    }
}

export default Contacts;