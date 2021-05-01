import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import PublicRoute from '../routers/PublicRoute';
import AuthContext from '../helpers/AuthContext';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import Patron1Page from '../pages/patrones/Patron1Page';
import Patron2Page from '../pages/patrones/Patron2Page';
import Patron3Page from '../pages/patrones/Patron3Page';
import Header from '../components/Header';
import LoadingWrapper from '../components/LoadingWrapper';

const AppRouter = () => {
  const { userLoading, user } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <LoadingWrapper isLoading={userLoading}>
        <Switch>
          <Route
            exact
            path="/"
            component={MainPage}
          />
          <Route
            exact
            path="/patrones/patron-1"
            component={Patron1Page}
          />
          <Route
            exact
            path="/patrones/patron-2"
            component={Patron2Page}
          />
          <Route
            exact
            path="/patrones/patron-3"
            component={Patron3Page}
          />
          <PublicRoute
            user={user}
            exact
            path="/auth"
            component={AuthPage}
          />
          <Redirect to="/" />
        </Switch>
      </LoadingWrapper>
    </Router>
  );
};

export default AppRouter;
