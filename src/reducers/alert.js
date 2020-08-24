import * as ACTION from '../actions';

export default function alert(state = {}, action) {
  switch (action.type) {
    case ACTION.ALERT_SUCCESS:
      return {
        type: 'alert-success',
        title: 'Success',
        message: action.message
      };
    case ACTION.ALERT_ERROR:
      console.log('errr ', action)
      return {
        type: 'alert-danger',
        title: 'Error',
        message: action.message
      };
    case ACTION.ALERT_CLEAR:
      return {};
    default:
      return state
  }
}