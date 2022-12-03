import React from 'react'
import './ChangePassword.css'
import { useDispatch, useSelector } from "react-redux";
import { arrowRight, warningIcon } from "../../../../utils/svgIcons";
import { profileDrawer, showChangePasswordSection } from "../../../../redux/reducers/headerProfileOptions";


const ChangePassword = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        // dispatch(profileDrawer(false));
        dispatch(showChangePasswordSection(false))
    };

    return (
        <>
            <div className="drawer-profile">
                <div className="drawer-profile-header">
                    <div className="drawer-profile-clear" onClick={handleClick}>
                        {arrowRight}
                    </div>
                    <div className="settings-settings-text">
                        <p>Change your Password</p>
                        <div className='settings-span'>Your password must have at least 6 or more characters</div>
                    </div>
                </div>
                <div className="privacy-policy-phrases">
                    <form className='change-password-form'>
                        <input type="text" id="fullName" name="fullName" placeholder=" " />
                        <label for="fullName">Current Password</label>
                        <input type="email" id="email" name="email" placeholder=" " />
                        <label for="email">New Password</label>
                        <input type="password" id="password" name="password" placeholder=" " />
                        <label for="password">Confirm Password</label>
                        <button type='button'>Reset Password</button>
                    </form>
                </div>
                {/* <div className="toast">
                    <div className="warning-content">
                        {warningIcon}
                        <p>Invalid password, please try again</p>
                    </div>
                </div> */}

                <div className="toast">

                    {/* add toast here */}
                </div>
            </div>

        </>
    )

}

export default ChangePassword