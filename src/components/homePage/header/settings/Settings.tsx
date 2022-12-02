import React, {useState} from "react";
import "./Settings.css";
import {
  closeProfile,
  settings_Icon,
  privacy_icon,
  terms_icon,
  chevron_right,
} from "../../../../utils/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import { profileDrawer } from "../../../../redux/reducers/headerProfileOptions";

const Settings = () => {
    
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(profileDrawer(false));
  };
  
  return (
    <div className="drawer-profile">
      <div className="drawer-profile-header">
        <div className="drawer-profile-clear" onClick={handleClick}>
          {closeProfile}
        </div>
        <div className="settings-settings-text">
          <p>Settings</p>
        </div>
      </div>

      <div className="settings-body">
        <div className="settings-notification">
          <div className="settings-notification-text-icon">
            <div>{settings_Icon}</div>
            <p className="settings-notification-text">Notification Settings</p>
          </div>
          <div className="settings-push-notification">
            <p>Push Notification</p>
          </div>
          <div className="settings-notification-sound">
            <p>Notification Sound</p>
          </div>
        </div>

        <div className="settings-privacy-policy">
          <div className="privacy-policy-text-icon">
            <div>{privacy_icon}</div>
            <p>Privacy Policy</p>
          </div>
          <div className="settings-chevron-right">{chevron_right}</div>
        </div>

        <div className="settings-terms-services">
          <div className="terms-text-icon">
            <div>{terms_icon}</div>
            <p>Terms of Services</p>
          </div>
          <div className="settings-chevron-right">{chevron_right}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
