import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PetList from "./PetList";
import FindSheltersPage from "./FindSheltersPage";
import AddPetForm from "./AddPetForm";
import EditPetForm from "./EditPetForm";
import LoginRegister from "./LoginRegister";
import PetDetails from "./PetDetails";
import { connect } from 'react-redux';
import * as a from './../actions/actions.js';
import { withFirestore } from 'react-redux-firebase';


class PawPal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageShowing: true,
      aboutPageShowing: false,
      browsePageShowing: false,
      findSheltersShowing: false,
      loginRegisterShowing: false,
      //selectedPet: null
    };
}
handleSelectingPet = (id, petName, price, breed, description, image) => {
  console.log("Select function reached in pawPal.js", id, petName, price, breed, description, image) //use id to find matching id in array of pets in props and set selectedPet state slice to object.
  const { dispatch } = this.props;
  const action = a.selectPet(id, petName, price, breed, description, image)
  dispatch(action);
  // this.setState({
  //   selectedPet:
  // })
}
handleAddPetButtonClicked = () => {
  console.log("Add pet reached!")
  // const { dispatch } = this.props;
  // let action = a.toggleForm();
  // dispatch(action);
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
  let currentlyVisiblePage = null;
  if (this.props.selectedPet != null) {
    currentlyVisiblePage = <PetDetails pet={this.props.selectedPet} />
  }
  else if (this.state.aboutPageShowing) {
    currentlyVisiblePage = <AboutPage />;
  }
  else if (this.state.browsePageShowing) {
    currentlyVisiblePage = <PetList 
    // petList={[{petName: "Albert", breed: "Dog", price: 12, image: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", description: "Albert is a furry little fuzzball who likes chasing his frisbee and leaving skidmarks across carpets. He is for adoption because he smells like a large poo.", id: "1"}]} 
    
    petList={this.props.masterPetList}
    onPetSelection={this.handleSelectingPet}
    onAddNewPetButtonClicked={this.handleAddPetButtonClicked}/>;
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

const mapStateToProps = state => {
  return {
    masterPetList: state.masterPetList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedPet: state.selectedPet
  }
}

PawPal = connect(mapStateToProps)(PawPal);

export default withFirestore(PawPal);

// export default PawPal;