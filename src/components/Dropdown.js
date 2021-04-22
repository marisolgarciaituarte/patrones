import React from 'react';

export const DropdownItem = ({ children, ...rest }) => {
  return (
    <li {...rest}>
      {children}
    </li>
  )
};

export const Dropdown = ({ isOpen = false, className, handleClose, children, ...rest }) => {
  if (isOpen) {
    return (
      <>
        <div className="overlay" onClick={handleClose}></div>
        <ul className={`dropdown ${className}`} {...rest}>
          {children}
        </ul>
      </>
    );
  }

  return null;
};
