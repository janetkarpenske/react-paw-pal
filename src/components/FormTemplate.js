import React from 'react';
import PropTypes from 'prop-types';

function FormTemplate(props) {
return (
  <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <input className="form-control" type='text' name='petName' placeholder='Pet Name' required/><br/>
      <div className="row">
        <div className="col-md-6">
          <input className="form-control" type='number' name='price' placeholder='Price' required/><br/>
        </div>
        <div className="col-md-6">
        <input className="form-control" type='text' name='breed' placeholder='Breed' required/><br/>
        </div>
      </div>
      <button className="btn btn-dark btn-sm" type='submit'>{props.buttonText}</button><br/><br/>
    </form>
  </React.Fragment>
);
}

FormTemplate.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default FormTemplate;