import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux';
// import { Motion, spring } from 'react-motion';

import { resendConfirmation } from '../../actions/auth';
import Fade from '../animations/Fade';

class ConfirmEmailMessage extends React.Component {
  
  state = {
    sent: false
  }
  
  onResend = (e) => {    
    e.preventDefault();
    this.props.resendConfirmation(this.props.email)
    .then(() => {
      this.setState({ sent: true });
    })
    .catch(() => {
      this.setState({ sent: false });
    })
  }

  render() {
    // const res = 'your confirmation email has been re-sent';

    return (
      <Message info>
        <Message.Header>Please verify your email to unlock awesomeness!</Message.Header>
          <div className="dashboard-confirmation-message">
            { !this.state.sent && 
              <Message.Content>
                <Link to="" onClick={this.onResend}>resend confirmation email</Link>           
              </Message.Content>    
            }      
            <Fade in={this.state.sent}>
              <Message.Content>
                <span style={{color:"green"}}>a confirmation email has been resent</span>
              </Message.Content>
            </Fade>
          </div>
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