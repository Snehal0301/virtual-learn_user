import React from 'react';
import './Header.css';
import {
  bellIcon,
  headerLogo,
  searchIcon,
  settingsIcon,
} from '../../../utils/svgIcons';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">{headerLogo}</div>
      <div className="header-search">
        <input type="text" className="header-searchField" />
        <div className="header-searchIcon">{searchIcon}</div>
      </div>
      <div className="header-options">
        <div className="header-optionsBell">{bellIcon}</div>
        <div className="header-settings">{settingsIcon}</div>
        <div className="header-profilePic">
          <img
            src={require('../../../assets/images/dhoni.png')}
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
