import * as ACTION from '../actions';

const defaultState = {
  data: {
    userName: "User Name",
    equaty: {
      balance: "8.10K",
    },
    trade: {
      balance: "2.20K",
    },
    portfolio: {
      marginUsed: "200",
      accountValue: "10.20K",
    },
    holdings: {
      balance: "10.20K",
      total:  "120",
    }
  },
}


export default function authReducer(state = defaultState, action) {
  switch (action.type) {
  case ACTION.ADD_DATA: {
    return { ...state, nifty: action.nifty };
  } 
  default:
    return state;
  }
}
