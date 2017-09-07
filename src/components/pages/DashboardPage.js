import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

// import { login } from '../../actions/auth';

const DashboardPage = ({ isConfirmed }) => (
  <div>
    <h1>Dashboard Page!</h1>
    <Link to="/">Home</Link>

    { !isConfirmed && <ConfirmEmailMessage /> }

  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
}
  
function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed
  }
}

export default connect(mapStateToProps)(DashboardPage);
