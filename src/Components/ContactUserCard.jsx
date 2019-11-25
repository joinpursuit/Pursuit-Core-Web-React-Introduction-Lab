import React from 'react';
import './UserProfile.css';

class ContactUserCard extends React.Component {
    render() {
        return (
            <div className='UserProfile'>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
                        alt='ProfilePicture'></img>
                <div className='profileRightDiv'>
                    <h4>React Reactor</h4>
                    <h5>React Creator</h5>
                    <p>Some text</p>
                </div>
            </div>
        );
    }
}

export default ContactUserCard;