import React from 'react';
import PropTypes from 'prop-types';

function HomePage(props){
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default HomePage;