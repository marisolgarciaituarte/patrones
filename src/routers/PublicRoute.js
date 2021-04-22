import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  user,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      component={(props) => {
        if (!user) return <Component {...props} />;
        return <Redirect to="/" />;
      }}
      {...rest}
    />
  );
};

export default PublicRoute;
