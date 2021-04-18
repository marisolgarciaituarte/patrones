import React, { useState } from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const AuthPage = () => {
  const [form, setForm] = useState('login');

  const renderForm = () => {
    switch (form) {
      case 'login':
        return <LoginForm goTo={setForm} />;
      case 'register':
        return <RegisterForm goTo={setForm} />;
      case 'forgot-password':
        return <ForgotPasswordForm goTo={setForm} />;
      default:
        return null;
    }
  }

  return (
    <main className="d-flex flex-row justify-content-center overflow-hidden">
      {renderForm()}
    </main>
  );
};

export default AuthPage;
