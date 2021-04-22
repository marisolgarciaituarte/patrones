import React, { useState, useEffect } from 'react';

export const useAlertState = ({ type, message }) => {
  const [state, setState] = useState({
    type,
    message,
    timestamp: null,
  });

  const resetState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
      timestamp: Date.now(),
    }));
  };

  return [state, resetState];
};

export const Alert = ({ type, message, timestamp }) => {
  const [show, setShow] = useState(timestamp);

  useEffect(() => {
    setShow(timestamp);
  }, [timestamp])

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(null);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [type, message, show]);

  if (show) {
    return (
      <div className="alert animate__animated animate__fadeInDown">
        <p className={`xs ${type}`}>{message}</p>
      </div>
    );
  }

  return null;
};
