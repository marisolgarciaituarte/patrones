import React, { useState } from 'react';

import Loader from '../../components/Loader';
import { formSubmitBehavior } from '../../helpers/utils';
import { recoverUser } from '../../helpers/firebase';

const ForgotPasswordForm = ({ goTo }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    formSubmitBehavior(event);
    setIsLoading(true);
    setErrorMessage('');
    recoverUser(email)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  const handleGoToLogin = () => goTo('login');

  return (
    <form
      className="card auth-card"
      onSubmit={handleSubmit}
    >
      <h3 className="text-center m-bottom">Recover password</h3>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      {errorMessage ? (
        <p className="error xs">{errorMessage}</p>
      ) : null}
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader animation="line" light />
        ) : 'Recover'}
      </button>
      <p
        className="xs text-center link m-top-xl"
        onClick={handleGoToLogin}
      >
        Back to login
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
