import React, { useState } from 'react';

import iconArrowDown from '../assets/icons/arrow-down.png';

const Header = () => {
  const [languageMenu, setLanguageMenu] = useState(false);

  return (
    <header className="d-flex flex-row justify-content-end align-items-center">
      <div
        className="position-relative d-flex flex-row align-items-center cursor-pointer"
        onClick={() => setLanguageMenu(!languageMenu)}
      >
        <span className="p-right user-select-none">Español</span>
        <img
          className="p-right"
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
    </header>
  );
};

export default Header;
