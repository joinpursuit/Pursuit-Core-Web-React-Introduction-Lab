import React from "react";

import "./ContactUserCard.css";

const ContactUserCard = () => {
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
    );
}

export default ContactUserCard;