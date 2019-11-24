import React from 'react';

class UserProfile extends React.Component {
    constructor() {
        super()
        this.profile = {
            name: 'Jane Doe',
            image: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png',
            job: 'x',
            description: `This is the user's profile`
        }
    }

    render() {
        return (
            <div className='user-profile'>
                <img src={this.profile.image} alt='' width='300px'/>
                <h2>{this.profile.name}</h2>
                <p>{this.profile.job}</p>
                <p>{this.profile.description}</p>

            </div>
        )
    }
}

export default UserProfile;

