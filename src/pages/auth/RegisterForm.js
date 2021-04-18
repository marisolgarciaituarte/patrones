import React from 'react';

const RegisterForm = ({ goTo }) => {
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
      <h3 className="text-center m-bottom">Sign Up</h3>
      <div className="d-flex flex-row flex-wrap flex-nowrap-desktop gap">
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            type="text"
          />
        </div>
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="last-name">Last name</label>
          <input
            className="m-bottom"
            id="last-name"
            type="text"
          />
        </div>
      </div>
      <label htmlFor="email">Email</label>
      <input
        className="m-bottom"
        id="email"
        type="email"
      />
      <div className="d-flex flex-row flex-wrap flex-nowrap-desktop gap">
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
          />
        </div>
        <div className="flex-1-1-auto d-flex flex-column">
          <label htmlFor="confirm-password">Confirm</label>
          <input
            id="confirm-password"
            type="password"
          />
        </div>
      </div>
      <button
        type="submit"
      >
        Create account
      </button>
      <p className="text-center m-top-xl">
        <span className="xs">Do you already have an account?</span>{' '}
        <span className="xs link" onClick={handleGoToLogin}>Login</span>
      </p>
    </form>
  );
};

export default RegisterForm;
