import React from 'react';
import FormTemplate from './FormTemplate';
import PropTypes from 'prop-types';

function EditPetForm (props) {
  const { pet } = props;

  function handleEditSubmission(event) {
    event.preventDefault();
    props.onEditPet({petName: event.target.petName.value, breed: event.target.breed.value, price: event.target.price.value, id: pet.id})
  }
  return (
    <React.Fragment>
      <FormTemplate formSubmissionHandler = {handleEditSubmission} buttonText="Update Pet Info"/>
    </React.Fragment>
  );
}

EditPetForm.propTypes = {
  onEditPet: PropTypes.func
};

export default EditPetForm;