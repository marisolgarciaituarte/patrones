import React, { useState } from 'react';

import Loader from '../../components/Loader';
import { formSubmitBehavior } from '../../helpers/utils';
import { registerUser } from '../../helpers/firebase';

const RegisterForm = ({ goTo }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    formSubmitBehavior(event);
    if (firstName && lastName && password && confirmPassword && password === confirmPassword) {
      setIsLoading(true);
      setErrorMessage('');
      registerUser({ firstName, lastName, email, password })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage('Faltan datos');
    }
  };

  const handleGoToLogin = () => goTo('login');

  return (
    <form
      className="card auth-card"
      onSubmit={handleSubmit}
    >
      <h3 className="text-center m-bottom">Sign Up</h3>
      <div className="d-flex flex-row flex-wrap flex-nowrap-desktop gap">
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={handleChangeFirstName}
          />
        </div>
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="last-name">Last name</label>
          <input
            className="m-bottom"
            id="last-name"
            type="text"
            value={lastName}
            onChange={handleChangeLastName}
          />
        </div>
      </div>
      <label htmlFor="email">Email</label>
      <input
        className="m-bottom"
        id="email"
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <div className="d-flex flex-row flex-wrap flex-nowrap-desktop gap">
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="confirm-password">Confirm</label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
        </div>
      </div>
      {errorMessage ? (
        <p className="error xs">{errorMessage}</p>
      ) : null}
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader animation="line" light />
        ) : 'Create account'}
      </button>
      <p className="text-center m-top-xl">
        <span className="xs">Do you already have an account?</span>{' '}
        <span className="xs link" onClick={handleGoToLogin}>Login</span>
      </p>
    </form>
  );
};

export default RegisterForm;
