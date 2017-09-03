import { USER_LOGGED_IN } from '../types';
import api from '../api';

// define payload
export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
})
// make api request and dispatch acytion with data gathered from api call
export const login = (credentials) => (dispatch) => 
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));