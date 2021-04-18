import React from 'react';

const ForgotPasswordForm = ({ goTo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  const handleGoToLogin = () => goTo('login');

  return (
    <form
      className="card login animate__animated animate__flipInY"
      onSubmit={handleSubmit}
    >
      <h3 className="text-center m-bottom">Recover password</h3>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
      />
      <button type="submit">
        Recover
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
