import axios from 'axios';

export default {
  user: {
    login: credentials => 
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user => 
      axios.post('/api/users', { user }).then(res => res.data.user),
    confirm: token =>
      axios.post('/api/auth/confirmation', { token }).then(res => res.data.user),
    resendConfirmation: email =>
      axios.post('/api/auth/resendconfirmation', { email }).then(res => res.data)
  },
} 