import React from "react";
import Header from "./Header";
import PetList from "./PetList";


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
  this.setState({
    homePageShowing: true,
    aboutPageShowing: false,
    browsePageShowing: false,
    findSheltersShowing: false,
    loginRegisterShowing: false
  })
}
handleAboutButtonClick = () => {
  this.setState({
    homePageShowing: false,
    aboutPageShowing: true,
    browsePageShowing: false,
    findSheltersShowing: false,
    loginRegisterShowing: false
  })
}
handleBrowseButtonClick = () => {
  this.setState({
    homePageShowing: false,
    aboutPageShowing: false,
    browsePageShowing: true,
    findSheltersShowing: false,
    loginRegisterShowing: false
  })
}
handleFindSheltersButtonClick = () => {
  this.setState({
    homePageShowing: false,
    aboutPageShowing: false,
    browsePageShowing: false,
    findSheltersShowing: true,
    loginRegisterShowing: false
  })
}
handleLoginRegisterButtonClick = () => {
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
        <div className="row">
          <div className="col-md-6 center-align">
            <h1>Adoptable Dogs</h1>
            <hr></hr>
            <img className="homePageImg" src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
          </div>
          <div className="col-md-6 center-align">
            <h1>Adoptable Cats</h1>
            <hr></hr>
            <img className="homePageImg" src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"></img>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}
}

export default PawPal;