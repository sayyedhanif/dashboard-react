// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react'  
import { render } from 'react-dom'  
import { createStore } from 'redux'  
import { Provider } from 'react-redux'  
import App from './App'  
import rootReducer from './reducers' 
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
  
const store = createStore(rootReducer)  
  
render(  
  <Provider store={store}>  
    <App />  
  </Provider>,  
  document.getElementById('root'),  
)  

