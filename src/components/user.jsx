import React from 'react';
class User extends React.Component {
    user = {
        img: "https://icon-library.net/images/generic-user-icon/generic-user-icon-19.jpg",
        name: "Jordan Walke",
        title: "React Creator",
        description: "Lorem Ipsem"
    }
    render () {
        return (
            <div>
                <img src= {this.user.img} placeholder="generic user image"></img>
                <div class = "user_info">
                <h4> {this.user.name} </h4>
                <h5> {this.user.title} </h5>
                <p> {this.user.description} </p>
            </div>
            </div>
        )
    }
}
export default User;