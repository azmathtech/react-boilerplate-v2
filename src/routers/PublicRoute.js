import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated
          ? <Redirect to="/dashboard" />
          : <div>
              <Component {...props} />
            </div>}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);

// const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
//   return <Route {...rest} component={props => <Component {...props} />} />;
// };
