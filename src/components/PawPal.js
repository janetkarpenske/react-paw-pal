import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PetList from "./PetList";
import FindSheltersPage from "./FindSheltersPage";
import LoginRegister from "./LoginRegister";


class PawPal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageShowing: true,
      aboutPageShowing: false,
      browsePageShowing: false,
      findSheltersShowing: false,
      loginRegisterShowing: false
    };
}

handleHomeButtonClick = () => {
  console.log("Home clicked")
  this.setState({
    homePageShowing: true,
    aboutPageShowing: false,
    browsePageShowing: false,
    findSheltersShowing: false,
    loginRegisterShowing: false
  })
}
handleAboutButtonClick = () => {
  console.log("About clicked")
  this.setState({
    homePageShowing: false,
    aboutPageShowing: true,
    browsePageShowing: false,
    findSheltersShowing: false,
    loginRegisterShowing: false
  })
}
handleBrowseButtonClick = () => {
  console.log("Browse clicked")
  this.setState({
    homePageShowing: false,
    aboutPageShowing: false,
    browsePageShowing: true,
    findSheltersShowing: false,
    loginRegisterShowing: false
  })
}
handleFindSheltersButtonClick = () => {
  console.log("Find Local Shelters clicked")
  this.setState({
    homePageShowing: false,
    aboutPageShowing: false,
    browsePageShowing: false,
    findSheltersShowing: true,
    loginRegisterShowing: false
  })
}
handleLoginRegisterButtonClick = () => {
  console.log("Login/Register clicked")
  this.setState({
    homePageShowing: false,
    aboutPageShowing: false,
    browsePageShowing: false,
    findSheltersShowing: false,
    loginRegisterShowing: true
  })
}
rotateDisplayImages = () => { //This function should be called when the homePage component mounts and will iterate through an array of animal pictures. Use state for currentPic??
  setInterval(function(){ 
    //alert("Hello"); 
  
    }, 
    3000);
}

render () {
  let currentlyVisiblePage = null;
  if (this.state.aboutPageShowing) {
    currentlyVisiblePage = <AboutPage />;
  }
  else if (this.state.browsePageShowing) {
    currentlyVisiblePage = <PetList petList={{petName: "Albert", breed: "Dog", price: 12}}/>;
  }
  else if (this.state.findSheltersShowing) {
    currentlyVisiblePage = <FindSheltersPage />;
  }
  else if (this.state.loginRegisterShowing) {
    currentlyVisiblePage = <LoginRegister />;
  }
  else {
    currentlyVisiblePage =  <HomePage />;
  }

  return ( 
    <React.Fragment>
      <Header 
        homeButtonClick={this.handleHomeButtonClick}
        aboutButtonClick={this.handleAboutButtonClick}
        browseButtonClick={this.handleBrowseButtonClick}
        findSheltersButtonClick={this.handleFindSheltersButtonClick}
        loginRegisterButtonClick={this.handleLoginRegisterButtonClick} 
      />

      <div className="container-fluid">
        {currentlyVisiblePage}

      </div>
    </React.Fragment>
  );
}
}

export default PawPal;