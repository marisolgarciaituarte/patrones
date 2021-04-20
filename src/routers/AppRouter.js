import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import PublicRoute from '../routers/PublicRoute';
import PrivateRoute from '../routers/PrivateRoute';
import AuthContext from '../auth/AuthContext';
import AuthPage from '../pages/auth/AuthPage';
import PanelPage from '../pages/PanelPage';
import Header from '../components/Header';

const AppRouter = () => {
  const { authState } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path="/auth"
          component={AuthPage}
          authState={authState}
        />
        <PrivateRoute
          path="/"
          component={PanelPage}
          authState={authState}
        />
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
