import React from "react";
import "./ChangePassword.css";
import { useDispatch, useSelector } from "react-redux";
import { arrowRight, warningIcon } from "../../../../utils/svgIcons";
import {
  editProfileSection,
  profileDrawer,
  showChangePasswordSection,
} from "../../../../redux/reducers/headerProfileOptions";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(profileDrawer(false));
    dispatch(editProfileSection(false));
    dispatch(showChangePasswordSection(false));
  };

  return (
    <>
      <div className="drawer-profile-change">
        <div className="drawer-profile-header-change">
          <div className="drawer-profile-clear-change" onClick={handleClick}>
            {arrowRight}
          </div>
          <div className="settings-settings-text-change">
            <p>Change your Password</p>
            <div className="settings-span">
              Your password must have at least 6 or more characters
            </div>
          </div>
        </div>
        <div className="privacy-policy-phrases">
          <form className="change-password-form">
            <input
              className="change-password-form-input"
              type="password"
              id="fullName"
              name="fullName"
              placeholder=" "
            />
            <label className="change-password-form-label" for="fullName">
              Current Password
            </label>
            <input
              className="change-password-form-input"
              type="password"
              id="email"
              name="email"
              placeholder=" "
            />
            <label className="change-password-form-label" for="email">
              New Password
            </label>
            <input
              className="change-password-form-input"
              type="password"
              id="password"
              name="password"
              placeholder=" "
            />
            <label className="change-password-form-label" for="password">
              Confirm Password
            </label>
            <button type="button" className="change-password-reset-btn">
              Reset Password
            </button>
          </form>
          {/* <form className='change-password-form'>
                        <input type="password" placeholder='Current Password' />
                        <input type="password" placeholder='New Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <button type='button' className='change-password-reset-btn'>Reset Password</button>
                    </form> */}
        </div>
        {/* <div className="toast">
                    <div className="warning-content">
                        {warningIcon}
                        <p>Invalid password, please try again</p>
                    </div>
                </div> */}

        <div className="toast">{/* add toast here */}</div>
      </div>
    </>
  );
};

export default ChangePassword;
