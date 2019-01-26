import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Boilerplate</h1>
        <p>Tag Line for app</p>
        <button onClick={startLogin} className="login_button">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default connect(undefined, { startLogin })(LoginPage);
