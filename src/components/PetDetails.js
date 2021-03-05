import React from 'react';
import PropTypes from 'prop-types';

function PetDetails(props) {
  const { pet, onClickingDelete, onClickingEdit } = props; //deconstructs the pet object

  return (
    <React.Fragment>
      <h3><strong>{pet.petName}</strong></h3>
      <h4>${pet.price}</h4>
      <h4>{pet.breed}</h4>
      <img src={pet.image}></img>
      <h4>{pet.description}</h4>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingDelete(pet.id) }>Remove Listing</button>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingEdit(pet.id) }>Edit Info</button>
    </React.Fragment>
  );
}

PetDetails.propTypes = {
  pet: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}
export default PetDetails;