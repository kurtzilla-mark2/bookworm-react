import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import ResendConfirmEmail from '../messages/ResendConfirmEmail';

const DashboardPage = ({ isConfirmed, user }) => (
  <div>
    <h1>Dashboard Page!</h1>

    { !isConfirmed && <ConfirmEmailMessage /> }
    { !isConfirmed && <ResendConfirmEmail user={user} /> }

  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}
  
function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed,
    user: state.user
  }
}

export default connect(mapStateToProps)(DashboardPage);
