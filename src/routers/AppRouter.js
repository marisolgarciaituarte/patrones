import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import PublicRoute from '../routers/PublicRoute';
import PrivateRoute from '../routers/PrivateRoute';
import AuthContext from '../helpers/AuthContext';
import AuthPage from '../pages/auth/AuthPage';
import PanelPage from '../pages/PanelPage';
import Header from '../components/Header';
import LoadingWrapper from '../components/LoadingWrapper';

const AppRouter = () => {
  const { userLoading, user } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <LoadingWrapper isLoading={userLoading}>
        <Switch>
          <PublicRoute
            user={user}
            exact
            path="/auth"
            component={AuthPage}
          />
          <PrivateRoute
            user={user}
            path="/"
            component={PanelPage}
          />
          <Redirect to="/auth" />
        </Switch>
      </LoadingWrapper>
    </Router>
  );
};

export default AppRouter;
