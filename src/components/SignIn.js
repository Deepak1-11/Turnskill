import React from 'react';
import Loginform from './Loginform';

function SignIn() {
    return (
        <div className="container mt-4 signup__form" style={{minHeight:"100vh"}}>
        <div className="row">
          <div className="col-md-7">
          <Loginform/>
          </div>
          <div className="col-md-7 my-auto">
            
          </div>
        </div>
      </div>
    )
}

export default SignIn;
