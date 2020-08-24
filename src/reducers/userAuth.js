import * as ACTION from '../actions';

import { history } from '../helper/history';
const defaultState = {
  isAuthenticated: false,
  userDetails: {}, 
}
if (window.localStorage.getItem('user')) {
  defaultState.isAuthenticated = true;
  defaultState.userDetails= JSON.parse(window.localStorage.getItem('user'));
}

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    
  case ACTION.USER_LOGIN: {
    window.localStorage.setItem('user', JSON.stringify(action.userDetails));
    history.push('/dashboard');
    return { ...state, isAuthenticated: true, userDetails: action.userDetails };
  }    
  
  case ACTION.USER_LOGOUT:
    window.localStorage.removeItem('user');
    return {
      ...state,
      isAuthenticated: false,
      userDetails: null,
    };
  default:
    return state;
  }
}
