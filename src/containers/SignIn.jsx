import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import logo from '../images/equate.png';


class SignInComponent extends PureComponent {
  constructor() { 
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLoginClick = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { onLogin, history } = this.props;
    if (username && password) {
      onLogin(username, password);
      history.push('/dashboard')
    } else {
      // show erro message
    }
  };
  
  render() {
    const { username, password} = this.state;
    return (
      <div className="wrapper">
        <header className="header center-text">
          <img src={logo} alt="" />
        </header>
        <section className="section mt-50">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={username}
                              onChange={this.handleUsernameChange}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  value={password}
                                  onChange={this.handlePasswordChange}/>
                </Form.Group>     

                <Button variant="primary" type="submit" onClick={this.handleLoginClick}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </section>                
      </div>
    );
  }
}

SignInComponent.defaultProps = {
  onLogin: Function,
};

SignInComponent.propTypes = {
  onLogin: PropTypes.instanceOf(Function),
};

const mapDispatchToProps = dispatch => ({ 
  onLogin: (username, password) => dispatch(loginAction(username, password)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignInComponent));
