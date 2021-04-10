
import "./ContactUserCard.css";

// import React from "react";
// const ContactUserCard = () => {
//     return (
        // <div className="contact-card">
        //     <div className="picture-div">
        //         <img id="user-picture" src="https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg" alt=""></img>
        //     </div>
        //     <div className="description-div">
        //         <h2>Jordan Walke</h2>
        //         <h4>React Creator</h4>
        //         <p>Lorem Ipsem</p>
        //     </div>
        // </div>
//     );
// }

// export default ContactUserCard;




import React, { Component } from 'react'

export default class ContactUserCard extends Component {
    render() {
        return (
            <div className="contact-card">
                <div className="picture-div">
                    <img id="user-picture" src="https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg" alt=""></img>
                </div>
                <div className="description-div">
                    <h2>Jordan Walke</h2>
                    <h4>React Creator</h4>
                    <p>Lorem Ipsem</p>
                </div>
            </div>
        )
    }
}
