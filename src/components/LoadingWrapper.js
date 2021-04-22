import React from 'react';

import Loader from './Loader';

const Loading = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="full-size d-flex flex-row justify-content-center align-items-center">
        <Loader />
      </div>
    );
  }

  return children;
};

export default Loading;
