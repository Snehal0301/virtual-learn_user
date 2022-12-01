import React, { useState } from 'react';
import './Header.css';
import {
  bellIcon,
  graduationCapIcon,
  headerLogo,
  logoutIcon,
  profileIcon,
  searchIcon,
  settingsIcon,
} from '../../../utils/svgIcons';
import { useDispatch, useSelector } from 'react-redux';
import { headerProfile, profileDrawer } from '../../../redux/reducers/headerProfileOptions';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Profile from './profile/Profile';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    // setIsOpen(!isOpen)
    dispatch(profileDrawer(true))
    dispatch(headerProfile(false))
  }
  const dispatch = useDispatch();

  const headerOptions = useSelector((state: any) => state.headerProfile.value);
  const profileDrawerState = useSelector((state: any) => state.headerProfile.drawer);

  return (
    <>
      <div className="header">
        <div className="header-logo">{headerLogo}</div>
        <form className="header-search">
          <input
            type="text"
            className="header-searchField"
            placeholder="Search"
          />
          <div className="header-searchIcon">{searchIcon}</div>
        </form>
        {
          <div className="header-options">
            <div className="header-optionsBell">{bellIcon}</div>
            <div className="header-settings">{settingsIcon}</div>
            <div className="header-profilePic">
              <img
                src={require('../../../assets/images/dhoni.png')}
                alt="Profile Pic"
                onClick={(e: any) => {
                  e.stopPropagation();
                  dispatch(headerProfile(!headerOptions));
                }}
              />
              {headerOptions && (
                <div
                  className="header-profileOptions"
                  onClick={(e: any) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="header-profileOption header-profileOptionBorder">
                    <div className="header-profileOptionIcon">
                      {graduationCapIcon}
                    </div>
                    <div className="header-profileOptiontext">My Course</div>
                  </div>

                  <div className="header-profileOption  header-profileOptionBorder" onClick={handleClick}>
                    <div className="header-profileOptionIcon">{profileIcon}</div>
                    <div className="header-profileOptiontext"
                     
                    >My Profile</div>
                  </div>

                  <div className="header-profileOption">
                    <div className="header-profileOptionIcon">{logoutIcon}</div>
                    <div className="header-profileOptiontext">Logout</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
      </div>
      <Drawer
        open={profileDrawerState}
        onClose={handleClick}
        direction='right'
        className=''
        style={{
          width: '25rem'
        }}
      >
        <Profile />
      </Drawer>
    </>
  );
};

export default Header;
