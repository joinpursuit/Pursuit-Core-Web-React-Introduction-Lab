import React from "react";
import "./ContactUserCard.css"
const ContactUserCard = () =>{
    return (
        <div className="contactUserCard">
            <div>
                <img src="data:image/png;base64,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" alt="person"></img>
            </div>
            
            <div>
                <h1>Jordan Walke</h1>
                <h2>React Creator</h2>
                <p>Lorem Ipsem</p>
                
            </div>
        </div>
    )
}

export default ContactUserCard