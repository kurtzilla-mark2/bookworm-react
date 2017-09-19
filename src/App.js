import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navbar from './components/partials/Navbar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (
  <div className="ui container">
    <Navbar />

    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/signup" exact component={SignupPage} />
    <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage} />
    <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordPage} />
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
  </div>
);

// add location={location} to repair bug with RR4 and connect
// use shape as opposed to object as the linter prefers this.
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
