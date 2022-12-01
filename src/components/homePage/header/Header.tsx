import React, { useState } from 'react'
import './Header.css'
import {
  bellIcon,
  graduationCapIcon,
  headerLogo,
  logoutIcon,
  profileIcon,
  searchIcon,
  settingsIcon,
} from '../../../utils/svgIcons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { headerProfile } from '../../../redux/reducers/headerProfileOptions'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const headerOptions = useSelector((state: any) => state.headerProfile.value)
  console.log(headerOptions)

  return (
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
                e.stopPropagation()
                dispatch(headerProfile(!headerOptions))
              }}
            />
            {headerOptions && (
              <div
                className="header-profileOptions"
                onClick={(e: any) => {
                  e.stopPropagation()
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
                  <div className="header-profileOptiontext">My Profile</div>
                </div>

                <div
                  className="header-profileOption"
                  onClick={() => {
                    localStorage.setItem('auth', 'false')
                    window.location.reload()
                  }}
                >
                  <div className="header-profileOptionIcon">{logoutIcon}</div>
                  <div className="header-profileOptiontext">Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default Header