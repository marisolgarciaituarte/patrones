import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Dropdown, DropdownItem } from './Dropdown';
import IntlMessage from './IntlMessage';
import AuthContext from '../helpers/AuthContext';
import LangContext from '../helpers/LangContext';
import { languagesArray } from '../lang';
import iconArrowDown from '../assets/icons/arrow-down.png';

const Header = () => {
  const { user } = useContext(AuthContext);
  const { lang, dispatch } = useContext(LangContext);
  const [languageMenu, setLanguageMenu] = useState(false);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const handleSelectLanguage = (selectedLang) => {
    dispatch({
      type: 'RESET',
      payload: selectedLang,
    });
    setLanguageMenu(false);
  };

  return (
    <header className="d-flex flex-row justify-content-end align-items-center">
      <div
        className="position-relative d-flex flex-row align-items-center"
        onClick={() => setLanguageMenu(!languageMenu)}
      >
        <span className="p-right user-select-none cursor-pointer">
          <IntlMessage id={lang} />
        </span>
        <img
          className="icon m-right cursor-pointer"
          alt="arrow-down"
          src={iconArrowDown}
        />
        <Dropdown isOpen={languageMenu} handleClose={() => setLanguageMenu(false)}>
          {languagesArray.map((language) => (
            <DropdownItem
              key={language}
              className="cursor-pointer m-bottom"
              onClick={() => handleSelectLanguage(language)}
            >
              <IntlMessage id={language} />
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
      {user && (
        <button
          className="m-0 m-right"
          onClick={handleLogout}
        >
          <IntlMessage id="header-logout" />
        </button>
      )}
    </header>
  );
};

export default Header;
