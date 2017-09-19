import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux';

import { resendConfirmation } from '../../actions/auth';

class ConfirmEmailMessage extends React.Component {
  state = {
    sent: false
  }
  
  // TODO animate the fadeout 
  onResend = (e) => {    
    e.preventDefault();
    this.props.resendConfirmation(this.props.email)
    .then(() => {
      this.setState({ sent: true });

      setTimeout(() => {
        this.setState({ sent: false })

      }, 3000)
    })
    .catch(() => {
      this.setState({ sent: false });
    })
  }

  render() {
    return (
      <Message info>
        <Message.Header>Please verify your email to unlock awesomeness!</Message.Header>
        <Message.Content>
          { !this.state.sent && <Link to="" onClick={this.onResend}>resend confirmation email</Link> }
          { this.state.sent && "your confirmation email has been re-sent" }
        </Message.Content>
      </Message>
    );
  }
}

ConfirmEmailMessage.propTypes = {
  email: PropTypes.string.isRequired,
  resendConfirmation: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps, { resendConfirmation })(ConfirmEmailMessage);