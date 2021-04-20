import React, { useReducer, useEffect } from 'react';

import AppRouter from './routers/AppRouter';
import AuthContext from './auth/AuthContext';
import authReducer from './auth/authReducer';
import initAuthState from './auth/initAuthState';

const init = () => {
  return JSON.parse(localStorage.getItem('authState')) || initAuthState;
};

const App = () => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
