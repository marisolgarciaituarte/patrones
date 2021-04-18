import React from 'react';

const LoginForm = ({ goTo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  const handleGoToRegister = () => goTo('register');

  const handleGoToForgotPassword = () => goTo('forgot-password');

  return (
    <form
      className="card login animate__animated animate__zoomIn"
      onSubmit={handleSubmit}
    >
      <h3 className="text-center m-bottom">Login</h3>
      <label htmlFor="email">Email</label>
      <input
        className="m-bottom"
        id="email"
        type="email"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
      />
      <div className="d-flex flex-row justify-content-end">
        <p className="xs link m-top-xl" onClick={handleGoToForgotPassword}>Forgot password?</p>
      </div>
      <button
        type="submit"
      >
        Login
      </button>
      <p className="text-center m-top-xl">
        <span className="xs">Don't have an account?</span>{' '}
        <span className="xs link" onClick={handleGoToRegister}>Create one</span>
      </p>
    </form>
  );
};

export default LoginForm;
