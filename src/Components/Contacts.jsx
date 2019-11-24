import React from 'react';


class Contacts extends React.Component {
    constructor(prop) {
     super(prop)
        this.contact = {
            name: 'Jane Doe',
            image: 'https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png',
            job: 'w',
            description: `This is a description`
        }
    }

//         {
//             name: 'Brian Vaugn',
//             image: 'https://www.clipartwiki.com/clipimg/detail/65-656334_collection-of-random-clipart-pink-panther-doodle.png',
//             job: 'x',
//             description: `This is Brian's description`

//         },

//         {
//             name: 'Dan Abramov',
//             image: 'https://pbs.twimg.com/profile_images/1100750520254382080/1opxscX3.jpg',
//             job: 'y',
//             description: `This is Dan's description`
//         },

//         {
//             name: 'Flarnie Marchan',
//             image: 'https://66.media.tumblr.com/d41a4f2d2ce0473d57cd24d9f8efa632/tumblr_pf24j5mbOj1xuaeq7o4_250.jpg',
//             job: 'z',
//             description: `This is Flarnie's description`
//         }
//    }]
    
    render() {
        return ( 
            <div className='contact-user-card'>
                <img src={this.contact.image} alt=''/>
                <h3>{this.contact.name}</h3>
                <p>{this.contact.job}</p>
                <p>{this.contact.description}</p>
            </div>
          
        )
    }
   
}

export default Contacts;
