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
import { headerProfile } from '../../../redux/reducers/headerProfileOptions';
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
    dispatch(headerProfile(false))
  }
  const dispatch = useDispatch();

  const headerOptions = useSelector((state: any) => state.headerProfile.value);

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
            <div className="header-optionsBell" onClick={handleClick} >{bellIcon}</div>
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

                  <div className="header-profileOption  header-profileOptionBorder">
                    <div className="header-profileOptionIcon">{profileIcon}</div>
                    <div className="header-profileOptiontext"
                      onClick={handleClick}
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
        open={isOpen}
        onClose={handleClick}
        direction='right'
        className='bla bla bla'
        style={{
          width: '25rem',
          
        }}
      >
        <div>hello</div>
      </Drawer>
    </>
  );
};

export default Header;
