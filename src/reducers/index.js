import { combineReducers } from 'redux'  
import auth from './userAuth'
import appData from './appData'
import alert from './alert'
  
export default combineReducers({  
  auth,
  appData,
  alert,
})  