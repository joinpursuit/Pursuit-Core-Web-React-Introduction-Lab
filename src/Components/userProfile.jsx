import React from 'react';

class UserProfile extends React.Component {

    userInfo = {
        name: "Bucket Perfect",
        image: "https://cdn.shopify.com/s/files/1/0352/7949/products/Bucket_Bag_Vegetable_Tanned_Black_Flamma_Detail_1_27ca6645-d419-4540-a37f-ee4b0d28f075_1280x.jpg?v=1564726359",
        title: "Junk Holder",
        description: "Italian vegetable tanned leather black bucket bag with red matte patent interior. Detachable wallet and adjustable strap. Made in Italy."
    }

    render() {
        return(
            <div className='user'>
                <h2>{this.userInfo.name}</h2>
                <img src ={this.userInfo.image}  alt='userpic' width='200' height='200'></img>
                <h4>{this.userInfo.title}</h4>
                <p>{this.userInfo.description}</p>
            </div>
        )
    }
}

export default UserProfile;