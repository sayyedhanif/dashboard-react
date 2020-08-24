export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const ADD_DATA = 'ADD_DATA';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_ERROR = 'ALERT_ERROR';
export const ALERT_CLEAR = 'ALERT_CLEAR';

// static credentials
const users= [{
  email: 'admin',
  password: 'admin',
  userName: "User Admin",
  id: 12932973,
  lastLogin: new Date(),
  role:"ADMIN",
},{
  email: 'user@gmail.com',
  password: 'user',
  userName: "Normal User",
  id: 12932974,
  lastLogin: new Date(),
  role:"USER",
}]


export function loginAction(username, password) {

  let userFound = users.find(user => user.email === username);

  if (userFound) {    
    if (password === userFound.password) {
      if (userFound.role !== "ADMIN") {
        return { type: ALERT_ERROR, message: "Admin Restricted Page: You are not allowed to access this page" };
      }
      return { type: USER_LOGIN, userDetails: userFound };
    } else {
      return { type: ALERT_ERROR, message: "Passowrd not matched" };
    }
  } else {
    return { type: ALERT_ERROR, message: "User not found" };
  }
  
}

export function userLogout() {
  return { type: USER_LOGOUT };
}

  