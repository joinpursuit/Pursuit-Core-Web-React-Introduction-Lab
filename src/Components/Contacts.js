
import ContactUserCard from "./ContactUserCard"

import "./Contacts.css"


// import React from "react";
// const Contacts = () => {
    
//     const contactCardsArray = [
//         {
//             name:"Jhon",
//             job:"React Developer",
//             description:"Lorem Ipsum"
//         },
//         {
//             name:"Alon",
//             job:"React Creator",
//             description:"Lorem Ipsum"
//         },
//         {
//             name:"Davis",
//             job:"React Builder",
//             description:"Lorem Ipsum"
//         },
//         {
//             name:"David",
//             job:"React Maker",
//             description:"Lorem Ipsum"
//         }
//     ]

//     return (
    // <div className="Contacts">

    //     <h1>Contacts</h1>
    //     <ContactUserCard />
    //     <ContactUserCard />
    //     <ContactUserCard />
    //     <ContactUserCard />
        
        
    // </div>
//   )
// }
// export default Contacts;

// ****React Props Example****

// {contactCardsArray.map((card, i)=>{
//     return <ContactUserCard 
    
//     key={i}
//     name={card.name} 
//     job={card.job} 
//     description={card.description}

//     />    
// })}


import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">

                <h1>Contacts</h1>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                
        
            </div>
        )
    }
}
