import React from 'react';

import useAuth from './helpers/useAuth';
import useLang from './helpers/useLang';
import AuthContext from './helpers/AuthContext';
import LangContext from './helpers/LangContext';
import AppRouter from './routers/AppRouter';

const App = () => {
  const [userLoading, user] = useAuth();
  const [langLoading, lang] = useLang();

  return (
    <AuthContext.Provider value={{ userLoading, user }}>
      <LangContext.Provider value={{ langLoading, lang }}>
        <AppRouter />
      </LangContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
