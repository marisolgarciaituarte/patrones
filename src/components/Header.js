import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import AuthContext from '../helpers/AuthContext';
import iconArrowDown from '../assets/icons/arrow-down.png';

const Header = () => {
  const { user } = useContext(AuthContext);
  const [languageMenu, setLanguageMenu] = useState(false);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <header className="d-flex flex-row justify-content-end align-items-center">
      <div
        className="position-relative d-flex flex-row align-items-center cursor-pointer"
        onClick={() => setLanguageMenu(!languageMenu)}
      >
        <span className="m-right user-select-none">Español</span>
        <img
          className="m-right"
          alt="arrow-down"
          src={iconArrowDown}
        />
        {languageMenu && (
          <ul className="dropdown">
            <li className="m-bottom">Español</li>
            <li className="m-bottom">English</li>
            <li>Français</li>
          </ul>
        )}
      </div>
      {user && (
        <button
          className="m-0 m-right"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
