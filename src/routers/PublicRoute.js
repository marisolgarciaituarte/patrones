import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  authState,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      component={(props) => {
        if (!authState.user) return <Component {...props} />;
        return <Redirect to="/" />;
      }}
      {...rest}
    />
  );
};

export default PublicRoute;
