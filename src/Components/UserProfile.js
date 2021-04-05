import React from "react";
import "./UserProfile.css";

// const UserProfile = () => {
//   return (
//     <>
//       <div className="UserProfile">
//         <img
//           src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
//           alt="post"
//           width="200"
//           height="200"
//         />
//         <div className="User">
//         <h4>Jordan Walke</h4>
//         <h5>React Creator</h5>
//         <p>Lorem Ipsem</p>
//         </div>
//       </div>
//     </>
//   );
// };

//Refactoring Above Code
class UserProfile extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <>
        <div className="UserProfile">
          <img
            src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
            alt="post"
            width="200"
            height="200"
          />
          <div className="User">
          <h4>Jordan Walke</h4>
          <h5>React Creator</h5>
          <p>Lorem Ipsem</p>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
