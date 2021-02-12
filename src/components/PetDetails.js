import React from 'react';
import PropTypes from 'prop-types';

function PetDetails(props) {
  const { pet, onClickingDelete, onClickingEdit } = props; //deconstructs the keg object

  return (
    <React.Fragment>
      <h3><strong>{pet.petName}</strong></h3>
      <h4>${pet.price}</h4>
      <h4>{pet.breed}</h4>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingDelete(keg.id) }>Delete Brew</button>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingEdit(keg.id) }>Edit Brew</button>
    </React.Fragment>
  );
}

PetDetails.propTypes = {
  pet: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}
export default PetDetails;