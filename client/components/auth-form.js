import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../store';

/*///
 COMPONENT
*////
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        { error && error.response && <div>{ error.response.data }</div>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </div>
  );
};

/*///
 CONTAINER
*////
const mapLogin = state => ({
    name: 'login',
    displayName: 'Login',
    error: state.user.error
});

const mapSignup = state => ({
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
});

const mapDispatch = dispatch => ({
  handleSubmit: event => {
    event.preventDefault();
    const formName = event.target.name;
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(auth(email, password, formName));
  }
});

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/*///
 PROP TYPES
*////
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
