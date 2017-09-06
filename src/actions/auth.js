import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

// define payload
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

// make api request and dispatch acytion with data gathered from api call
export const login = credentials => dispatch => 
  api.user.login(credentials)
  .then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user))
  }); 

export const logout = () => dispatch => {
  localStorage.removeItem('bookwormJWT');
  dispatch(userLoggedOut());
};