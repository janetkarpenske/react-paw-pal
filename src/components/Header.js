import React from 'react';
import pawPrintSvg from './../img/paw.svg';
import petSvg from "./../img/pet-care.svg";
import homeSvg from "./../img/home.svg";

function Header (props) {
  const { homeButtonClick, aboutButtonClick, browseButtonClick, findSheltersButtonClick, loginRegisterButtonClick } = props;
  return (
    <React.Fragment>
      <div className="center-align title">
        <img className="pawSvg1" src={pawPrintSvg}></img>
        <img className="pawSvg2" src={petSvg}></img>
        <h1>PawPal</h1>
        <h2>Find Adoptable Pets in Your Area</h2>
      </div>
      <div className="center-align navBar">
        {/* Each navbar item will have an onClick function connected to a prop function that was passed down from PawPal.js. These will change the state to display the proper page. */}
        <ul>
          <li className="hoverItem1" onClick={ () => homeButtonClick()}><img className="homeSvg" src={homeSvg}></img></li>
          <li className="hoverItem1" onClick={ () => aboutButtonClick()}>About</li>
          <li className="hoverItem1" onClick={ () => browseButtonClick()}>Browse</li>
          <li className="hoverItem1" onClick={ () => findSheltersButtonClick()}>Find Local Shelters</li>
          <li className="hoverItem1" onClick={ () => loginRegisterButtonClick()}>Login + Register</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header;