import axios from 'axios';

export default {
  user: {
    login: credentials => 
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user => 
      axios.post('/api/users', { user }).then(res => res.data.user),
    confirm: token =>
      axios.post('/api/auth/confirmation', { token }).then(res => res.data.user),
    resendConfirmationEmail: email => 
      axios.post('/api/users/resend_confirmation_email', { email }),
    resetPasswordRequest: email =>
      axios.post('/api/auth/reset_password_request', { email }),
    validateResetPasswordToken: token =>
      axios.post('/api/auth/validate_reset_password_token', { token }),
    resetPassword: data =>
      axios.post('/api/auth/reset_password', { data })
  },
} 