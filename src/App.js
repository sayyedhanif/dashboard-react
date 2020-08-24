import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Home from './components/Home';
import SignIn from './containers/SignIn';
import { history } from './helper/history';

class App extends React.Component {

  isUserAuthenticated = () => {
    const { isAuthenticated } = this.props;

    return isAuthenticated;
  }

  render() {
    const {alert} = this.props;

    return (
      <div>
        { alert.message && <div className="row alert-box">
          <div className='col-sm-4 offset-sm-4'>
            
              <div className={`alert ${alert.type} alert-dismissible`}>
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>{alert.title}!</strong> {alert.message}
            </div>
            
          </div>
        </div>}

        <Router history={history}>
          <Switch>
            <Route exact path="/dashboard" render={ props => (
              this.isUserAuthenticated()
              ? true ? <Home {...props}   /> :null
              : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )}
            />
            <Route  path="/login" component={SignIn} />
            <Redirect from="*" to="/login" />
          </Switch>
        </Router>
      </div>
      
    );
  }
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  alert: state.alert,
});

export default connect(mapStateToProps, null)(App);
