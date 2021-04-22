import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Dropdown, DropdownItem } from './Dropdown';
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
        className="position-relative d-flex flex-row align-items-center"
        onClick={() => setLanguageMenu(!languageMenu)}
      >
        <span className="p-right user-select-none cursor-pointer">Español</span>
        <img
          className="m-right cursor-pointer"
          alt="arrow-down"
          src={iconArrowDown}
        />
        <Dropdown isOpen={languageMenu} handleClose={() => setLanguageMenu(false)}>
          <DropdownItem className="cursor-pointer m-bottom" onClick={() => setLanguageMenu(false)}>
            Español
          </DropdownItem>
          <DropdownItem className="cursor-pointer m-bottom" onClick={() => setLanguageMenu(false)}>
            English
          </DropdownItem>
          <DropdownItem className="cursor-pointer" onClick={() => setLanguageMenu(false)}>
            Français
          </DropdownItem>
        </Dropdown>
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
