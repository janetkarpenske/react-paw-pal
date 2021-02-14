import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import FormTemplate from './FormTemplate';

function AddPetForm (props) {

  function handlePetFormSubmission(event) {
    event.preventDefault();
    props.onNewPetCreation({petName: event.target.petName.value, breed: event.target.breed.value, price: event.target.price.value, id: v4()});
  }

  return (
    <React.Fragment>
      <FormTemplate formSubmissionHandler={handlePetFormSubmission}
      buttonText="Post as Available For Adoption" />
    </React.Fragment>
  );
}

AddPetForm.propTypes = {
  onNewPetCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default AddPetForm;