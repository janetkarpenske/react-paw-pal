import React from 'react';

function AboutPage (props) {
  //const { homeButtonClick, aboutButtonClick, browseButtonClick, findSheltersButtonClick, loginRegisterButtonClick } = props;
  return (
    <React.Fragment>
      <div className="center-align">
        <div className="row aboutRow">
          <div className="col-md-6">
            <h1>About</h1>
            <h4>There are lots of reasons someone might have to place a beloved pet up for adoption. Whether you no longer have the means to care for your pet, are too busy, or have been unable to get your pet comfortable in your home, you deserve support and your pet deserves his/her best chance at moving on to a new, loving home. Through whatever challenges you might be facing, PawPal is here to help make the journey a little easier. </h4>
            <br/>
            <h4>With PawPal you can quickly and easily list your dog or cat for adoption, or search for other pets listed for adoption in your area.</h4>
          </div>
          <div className="col-md-6">
            <img src="https://images.pexels.com/photos/57627/pexels-photo-57627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            
          </div>
        </div>


        <div className="row aboutRow">
          <div className="col-md-6">
          <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="dog pic"></img>
          </div>
          <div className="col-md-6">
            <h1>Why Place For Adoption?</h1>
            <h4>There are lots of reasons someone might have to place a beloved pet up for adoption. Whether you no longer have the means to care for your pet, are too busy, or have been unable to get your pet comfortable in your home, you deserve support and your pet deserves his/her best chance at moving on to a new, loving home. Through whatever challenges you might be facing, PawPal is here to help make the journey a little easier. </h4>
          </div>
        </div>

        <div className="row aboutRow">
          <div className="col-md-6">
            <h1>Why Adopt Over Buying From A Breeder?</h1>
            <h4>There are lots of reasons someone might have to place a beloved pet up for adoption. Whether you no longer have the means to care for your pet, are too busy, or have been unable to get your pet comfortable in your home, you deserve support and your pet deserves his/her best chance at moving on to a new, loving home. Through whatever challenges you might be facing, PawPal is here to help make the journey a little easier. </h4>
          </div>
          <div className="col-md-6">
            <img src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
          </div>
        </div>
      </div>

      
    </React.Fragment>
  )
}

export default AboutPage;