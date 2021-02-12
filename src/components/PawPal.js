import React from "react";
import Header from "./Header";


function PawPal(){
  return ( 
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 center-align">
            <h1>Woofers</h1>
            <hr></hr>
            <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"></img>
          </div>
          <div className="col-md-6 center-align">
            <h1>Meowers</h1>
            <hr></hr>
            <img src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"></img>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}

export default PawPal;