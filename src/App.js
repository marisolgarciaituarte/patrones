import React from 'react';

import useAuth from './helpers/useAuth';
import AuthContext from './helpers/AuthContext';
import AppRouter from './routers/AppRouter';

const App = () => {
  const [userLoading, user] = useAuth();

  return (
    <AuthContext.Provider value={{ userLoading, user }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
