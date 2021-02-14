import React from 'react';
import PropTypes from 'prop-types';

function Pet (props) {
  return (
    <React.Fragment>
      <div className="hoverItem" onClick = {() => props.whenPetIsClicked(props.id)}> 
      <div className="row">
        <div className="col-md-6 center-align">
          <img className="petDetailImg" src={props.image}></img>
        </div>
          <div className="col-md-6">
        <h4><strong>{props.petName}</strong></h4>
        <h5>{props.price}</h5> 
        <h5>Breed: {props.breed}</h5> 
        <h5>Description: {props.description}</h5> 
        </div>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Pet.propTypes = {
  petName: PropTypes.string,
  breed: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenPetIsClicked: PropTypes.func
};

export default Pet;