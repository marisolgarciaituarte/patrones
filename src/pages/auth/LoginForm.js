import React, { useState } from 'react';

import Loader from '../../components/Loader';
import { formSubmitBehavior } from '../../helpers/utils';
import { loginUser } from '../../helpers/firebase';

const LoginForm = ({ goTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    formSubmitBehavior(event);
    setIsLoading(true);
    setErrorMessage('');
    loginUser({ email, password })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  const handleGoToRegister = () => goTo('register');

  const handleGoToForgotPassword = () => goTo('forgot-password');

  return (
    <form
      className="card auth-card"
      onSubmit={handleSubmit}
    >
      <h3 className="text-center m-bottom">Login</h3>
      <label htmlFor="email">Email</label>
      <input
        className="m-bottom"
        id="email"
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={handleChangePassword}
      />
      {errorMessage ? (
        <p className="error xs">{errorMessage}</p>
      ) : null}
      <div className="d-flex flex-row justify-content-end">
        <p className="xs link m-top-xl" onClick={handleGoToForgotPassword}>Forgot password?</p>
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader animation="line" light />
        ) : 'Login'}
      </button>
      <p className="text-center m-top-xl">
        <span className="xs">Don't have an account?</span>{' '}
        <span className="xs link" onClick={handleGoToRegister}>Create one</span>
      </p>
    </form>
  );
};

export default LoginForm;
