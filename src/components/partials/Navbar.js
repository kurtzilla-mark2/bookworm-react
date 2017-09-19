import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

const Navbar = ({ isAuthenticated, logout }) => (
  <div>
    <div>
      <Link to="/">Home</Link>      
      { isAuthenticated && <span>&nbsp;|&nbsp;<Link to="/dashboard">Dashboard</Link></span> }      
      { isAuthenticated && <span>&nbsp;|&nbsp;<button to="/" onClick={() => logout()}>Logout</button></span> }
      { !isAuthenticated && <span>&nbsp;|&nbsp;<Link to="/login">Login</Link>&nbsp;|&nbsp;<Link to="/signup">Signup</Link></span> }
      { !isAuthenticated && <span>&nbsp;|&nbsp;<Link to="/forgot_password">Forgot Pass</Link></span> }
    </div>
    <hr />
  </div>
)

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(Navbar);