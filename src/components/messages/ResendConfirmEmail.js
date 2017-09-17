import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { resendConfirm } from '../../actions/auth';

class ResendConfirmEmail extends Component {

  state = { 
    resent: false, // tracks the resent - user can always refresh to see flow again
    done: false    // indicates we have gone through the entire process
  }
  
  handleDismiss = () => {
    this.setState({ resent: true, done: true });

    setTimeout(() => {
      this.setState({ resent: false })
    }, 1000);
  }

  clicked = (e) => {
    e.preventDefault();
    this.props.resendConfirm(this.props.user.email)
    .then(() => this.setState({ resent: true }))
    .catch(() => this.setState({ resent: false }));    
  }
  
  render() {
    return (      
      <div>
      { !this.state.resent && !this.state.done && 
        <Message info color='yellow' onClick={this.clicked} style={{ cursor: "pointer" }}>
          <Message.Header>Resend confirmation email</Message.Header>
        </Message>
      }

      { this.state.resent && 
        <Message 
          info 
          color='green' 
          onDismiss={this.handleDismiss} 
          onClick={this.handleDismiss} 
          style={{ cursor: "pointer" }}
        >
          <Message.Header>A confirmation email has been resent</Message.Header>
        </Message>
      }

      </div>
    )
  }
};

ResendConfirmEmail.propTypes = {
  resendConfirm: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(null, { resendConfirm })(ResendConfirmEmail);