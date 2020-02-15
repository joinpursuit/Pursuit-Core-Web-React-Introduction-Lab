import React from 'react';
import "../css/profile.css"

const Profile = ({name,position,statement})=>{
    return(
        <div className={"profile"}>
            <img src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg" alt="profile"/>
            <div>
                <h3>{name}</h3>
                <h4>{position}</h4>
                <h5>{statement}</h5>
            </div>

        </div>
    )
}


export default Profile;