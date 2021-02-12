import React from 'react';

function Header () {
  return (
    <React.Fragment>
      <div className="center-align title">
        {/* <img src="./../../public/paw.svg"></img> */}
        <h1>PawPal</h1>
        <h2>find pets for adoption in your area</h2>
      </div>
      <div className="center-align navBar">
        {/* Each navbar item will have an onClick function connected to a prop function that was passed down from PawPal.js. These will change the state to display the proper page. */}
        <ul>
          <li>home</li>
          <li>about</li>
          <li>browse</li>
          <li>find local shelters</li>
          <li>login + register</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header;