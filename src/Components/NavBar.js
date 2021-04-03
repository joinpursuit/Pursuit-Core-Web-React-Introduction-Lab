import React from "react";

import '../Style/navBar.css';

const NavBar = () => {
  return (
    <div >
      <button type="text" name="What is Pursuit">What is Pursuit?</button>
      <button type="text" name="Create Account">Create Account</button>
      <button type="text" name="Sign in">Sign in</button>
    </div>
  );
};

export default NavBar;

{/* <input type={inputTypes} onChange={onChangHandler} onBlur={onBlurHandler}>
  this is a mistake
  <div className="a-tip">
    {isNotNullOrDefined(iconName, true) && <Icon />}
    <Icon className="a-icons--small" name={iconName} />
    <span>{descriptionInput}</span>
  </div>
</input>

<input type={inputTypes} onChange={onChangHandler} onBlur={onBlurHandler} /> */}