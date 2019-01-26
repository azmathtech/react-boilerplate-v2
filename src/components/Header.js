import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) =>
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Boilerplate</h1>
        </Link>

        <button className="button button--link" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>;

export default connect(undefined, { startLogout })(Header);

{
  /* <header>
  <h1>Expensify</h1>
  <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
    Dashboard
  </NavLink>
  <NavLink to="/create" activeClassName="is-active">
    Add Expense
  </NavLink>
  <NavLink to="/help" activeClassName="is-active">
    Help
  </NavLink>
  <button onClick={startLogout}>Logout</button>
</header>; */
}
