import React from 'react';
import PropTypes from 'prop-types';

function Pet (props) {
  return (
    <React.Fragment>
      <div className="hoverItem" onClick = {() => props.whenPetIsClicked(props.id)}> 
        <h4><strong>{props.petName}</strong> - ${props.price}</h4>
        <h5>Breed: {props.breed}</h5> 
        
      </div>
      <hr/>
    </React.Fragment>
  );
}

Pet.propTypes = {
  petName: PropTypes.string,
  breed: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenPetIsClicked: PropTypes.func
};

export default Pet;