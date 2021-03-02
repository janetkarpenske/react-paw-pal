import React from 'react';

function LoginRegister (props) {
  //const { homeButtonClick, aboutButtonClick, browseButtonClick, findSheltersButtonClick, loginRegisterButtonClick } = props;
  return (
    <React.Fragment>
      <div className="center-align">
        <h1>Login/Register</h1>
        <h2>Coming Soon!</h2>
        <div className="row">
        <div className="col-md-6">
          <div className="card">
            <h2>Login</h2>
            <form>
              <input className="form-control" type="text" placeholder="Email"></input>
              <input className="form-control" type="text" placeholder="Password"></input>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h2>Register</h2>
            <form>
              <input className="form-control" type="text" placeholder="Email"></input>
              <input className="form-control" type="text" placeholder="Password"></input>
            </form>
          </div>
        </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default LoginRegister;